const roleButtons = document.querySelectorAll("[data-role]");
const roleInput = document.getElementById("accountRole");
const accountForm = document.getElementById("accountForm");
const accountMessage = document.getElementById("accountMessage");
const usernameInput = document.getElementById("accountUsername");
const usernameStatus = document.getElementById("usernameStatus");
const guardianConfirm = document.getElementById("guardianConfirm");
const guardianApproval = document.getElementById("guardianApproval");
const existingAccount = getHappyTalesAccount();
const requestedRole = new URLSearchParams(location.search).get("role");

const blockedUsernamePatterns = [
  /(?:sexy|porn|nude|naked|xxx)/i,
  /(?:kill|murder|terror|weapon|gun|drugs?)/i,
  /(?:hate|nazi|racist)/i,
  /(?:fuck|shit|bitch|asshole|dick|cock|pussy)/i
];
const reservedUsernames = new Set(["admin", "administrator", "moderator", "happytales", "official", "support"]);

function roleLabel(role) {
  return role === "teacher" ? "Teacher" : role === "kid" ? "Learner" : "Parent";
}

function normalizeUsername(value) {
  return value.trim().replace(/\s+/g, " ");
}

function validateUsername(value) {
  const username = normalizeUsername(value);
  if (username.length < 3 || username.length > 20) {
    return { valid: false, message: "Use between 3 and 20 characters." };
  }
  if (!/^[\p{L}\p{N}_ -]+$/u.test(username)) {
    return { valid: false, message: "Use letters, numbers, spaces, underscores, or hyphens only." };
  }
  const compact = username.toLowerCase().replace(/[\s_-]+/g, "");
  if (blockedUsernamePatterns.some(pattern => pattern.test(compact)) || reservedUsernames.has(compact)) {
    return { valid: false, message: "Please choose a different, family-friendly username." };
  }
  if (/^\d+$/.test(compact)) {
    return { valid: false, message: "Add at least one letter to your username." };
  }
  return { valid: true, username, message: "Username looks good." };
}

function updateUsernameStatus() {
  const result = validateUsername(usernameInput.value);
  usernameStatus.textContent = usernameInput.value ? result.message : "";
  usernameStatus.className = `field-status ${usernameInput.value ? result.valid ? "valid" : "invalid" : ""}`.trim();
  usernameInput.setAttribute("aria-invalid", String(Boolean(usernameInput.value) && !result.valid));
  return result;
}

function selectRole(role) {
  roleInput.value = role;
  roleButtons.forEach(button => {
    button.classList.toggle("active", button.dataset.role === role);
  });
  guardianConfirm.classList.toggle("show", role === "kid");
  guardianApproval.required = role === "kid";
  accountMessage.textContent = `${roleLabel(role)} account selected.`;
}

roleButtons.forEach(button => {
  button.addEventListener("click", () => selectRole(button.dataset.role));
});

if (["parent", "teacher", "kid"].includes(requestedRole)) {
  selectRole(requestedRole);
}


if (existingAccount) {
  document.getElementById("accountName").value = existingAccount.name;
  document.getElementById("accountEmail").value = existingAccount.email;
  usernameInput.value = existingAccount.username || existingAccount.name;
  if (["parent", "teacher", "kid"].includes(existingAccount.role)) selectRole(existingAccount.role);
  updateUsernameStatus();
  accountMessage.textContent = `Signed in as ${existingAccount.username || existingAccount.name}, ${roleLabel(existingAccount.role)}. You can continue creating stories.`;
}

usernameInput.addEventListener("input", updateUsernameStatus);
guardianApproval.addEventListener("invalid", () => {
  accountMessage.textContent = "A parent, guardian, or teacher must approve this learner profile.";
});
guardianApproval.addEventListener("change", () => {
  if (guardianApproval.checked && roleInput.value === "kid") {
    accountMessage.textContent = "Adult approval confirmed. This learner profile is ready to create.";
  }
});

accountForm.addEventListener("submit", async event => {
  event.preventDefault();

  const role = roleInput.value;
  const name = document.getElementById("accountName").value.trim();
  const usernameResult = updateUsernameStatus();
  const email = document.getElementById("accountEmail").value.trim();
  const password = document.getElementById("accountPassword").value;

  try {
    const response = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    });
    if (response.ok) {
      const account = await response.json();
      if (!account.username) account.username = usernameResult.valid ? usernameResult.username : account.name;
      localStorage.setItem(happyTalesAccountKey, JSON.stringify(account));
      accountMessage.textContent = `Welcome back, ${account.name}. Free unlimited access is active.`;
      setTimeout(() => {
        location.href = "library.html";
      }, 600);
      return;
    }
  } catch {
    // Continue with local free-account creation when the server login is unavailable.
  }

  if (!role) {
    accountMessage.textContent = "Please choose Parent, Teacher, or Learner.";
    return;
  }

  if (!usernameResult.valid) {
    accountMessage.textContent = usernameResult.message;
    usernameInput.focus();
    return;
  }

  if (role === "kid" && !guardianApproval.checked) {
    accountMessage.textContent = "A parent, guardian, or teacher must approve a learner profile.";
    guardianApproval.focus();
    return;
  }

  const account = {
    name,
    username: usernameResult.username,
    email,
    role,
    plan: "free_all",
    createdAt: new Date().toISOString()
  };
  localStorage.setItem(happyTalesAccountKey, JSON.stringify(account));
  accountMessage.textContent = `Welcome, ${usernameResult.username}. Your free unlimited ${roleLabel(role)} account is ready. Redirecting to the story maker...`;
  setTimeout(() => {
    location.href = "create.html";
  }, 600);
});

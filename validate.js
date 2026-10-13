const fs = require('fs');
const vm = require('vm');
function makeEl(){ return {addEventListener(){}, querySelector(){return makeEl()}, querySelectorAll(){return []}, classList:{add(){},remove(){},toggle(){}}, style:{}, dataset:{}, innerHTML:'', textContent:'', value:'preschool', hidden:false, setAttribute(){}, appendChild(){}, scrollIntoView(){}}; }
const ctx = {console, Math, Array, String, Number, Set, Map, JSON, Date, Intl, URLSearchParams, setTimeout(){}, clearTimeout(){}, localStorage:{getItem(){return null},setItem(){},removeItem(){}}, document:{addEventListener(){}, getElementById(){return makeEl()}, querySelector(){return makeEl()}, querySelectorAll(){return []}, createElement(){return makeEl()}, body:makeEl()}, window:{addEventListener(){}, location:{search:''}}};
vm.createContext(ctx);
let code = fs.readFileSync(__dirname + '/games.js','utf8');
code = code.replace('const mathTopics =', 'globalThis.mathTopics =');
code += '\nglobalThis.mathQuestion = mathQuestion; globalThis.ensureValidQuestion = ensureValidQuestion;';
vm.runInContext(code, ctx);
let issues=[];
for (const grade of Object.keys(ctx.mathTopics)){
  for (const topic of ctx.mathTopics[grade]){
    for (let i=0;i<300;i++){
      const q = ctx.mathQuestion(grade, topic.id, i, 12345+i*17);
      const clean = ctx.ensureValidQuestion(q);
      const [prompt, ans, choices] = clean;
      if (!choices.map(String).includes(String(ans))) issues.push(['missing', grade, topic.id, prompt, ans, choices]);
      if (new Set(choices.map(String)).size !== choices.length) issues.push(['dup', grade, topic.id, prompt, ans, choices]);
    }
  }
}
console.log('games math issues', issues.length);
if(issues.length) console.log(issues.slice(0,5));

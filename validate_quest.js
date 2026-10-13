const fs=require('fs'), vm=require('vm');
function makeEl(){return {addEventListener(){}, querySelector(){return makeEl()}, querySelectorAll(){return []}, classList:{add(){},remove(){},toggle(){}}, style:{}, dataset:{}, innerHTML:'', textContent:'', value:'preschool', hidden:false, setAttribute(){}, appendChild(){}, scrollIntoView(){}, insertAdjacentHTML(){}}}
const ctx={console, Math, Array, String, Number, Set, Map, JSON, Date, Intl, setTimeout(){}, clearTimeout(){}, localStorage:{getItem(){return null},setItem(){},removeItem(){}}, document:{addEventListener(){}, getElementById(){return makeEl()}, querySelector(){return makeEl()}, querySelectorAll(){return []}, createElement(){return makeEl()}, body:makeEl()}, window:{addEventListener(){}}};
vm.createContext(ctx);
let code=fs.readFileSync(__dirname + '/quest.js','utf8');
code += '\nglobalThis.buildGradeQuestion=buildGradeQuestion;';
vm.runInContext(code,ctx);
const grades=['preschool','kindergarten','grade1','grade2','grade3','grade4','grade5','grade6'];
let issues=[];
for (const grade of grades){for(let stage=1;stage<=10;stage++){for(let seed=0;seed<1000;seed++){for(const boss of [false,true]){const q=ctx.buildGradeQuestion(grade,seed,boss,stage); const ans=q.answers[q.correct]; if(ans===undefined) issues.push(['missingIndex',grade,seed,stage,q]); if(new Set(q.answers.map(String)).size!==q.answers.length) issues.push(['dup',grade,seed,stage,q]); if(q.answers.length!==4) issues.push(['len',grade,seed,stage,q]);}}}}
console.log('quest issues',issues.length);
if(issues.length) console.log(JSON.stringify(issues.slice(0,2),null,2));

function scramble(str1, str2){
debugger;
   count = 0;
result1 = [];
  str2.split('').filter(n=>{
  result1[n] = (result1[n]||0) + 1;
  });
 
  result2 = [];
  for(result1[i] in result1){
str1.split('').filter(n=>{
if(n===result[i]){
result2[n] = (result2[n] || 0) + 1;
}
});
if(result2[i]>=result1[i]){
count += 1;
}
  }
if(count>=Object.keys(result2).length){
return true;
}
else{
return false;
}
 
 
}
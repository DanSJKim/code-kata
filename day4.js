{\rtf1\ansi\ansicpg949\cocoartf2512
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww10800\viewh8400\viewkind0
\pard\tx566\tx1133\tx1700\tx2267\tx2834\tx3401\tx3968\tx4535\tx5102\tx5669\tx6236\tx6803\pardirnatural\partightenfactor0

\f0\fs24 \cf0 // My code\
const sameReverse = num => \{\
  let str = num.toString();\
  let result = '';\
  \
  \
  for (let i = str.length-1 ; i > -1 ; i--) \{\
    result = result + str[i];\
  \}\
  \
  if (str === result) \{\
    return true;\
  \} else \{\
    return false;\
  \}\
\}\
console.log(sameReverse(1221));\
\
\
// Solution code\
function sameReverse(num) \{\
  let xStrArr = (num + '').split('');\
  let strLength = xStrArr.length;\
  let arr = [];\
  \
  for (let i = 0; i < strLength; i++) \{\
      arr.push(xStrArr.pop());\
  \} \
  console.log(Number(arr.join('')))\
  return num === Number(arr.join(''));\
\}\
\
console.log(sameReverse(1234567887654321));}
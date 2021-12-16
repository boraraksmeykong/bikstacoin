{\rtf1\ansi\ansicpg1252\cocoartf2636
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fnil\fcharset0 Menlo-Regular;}
{\colortbl;\red255\green255\blue255;\red79\green123\blue61;\red26\green26\blue41;\red172\green172\blue193;
\red212\green212\blue212;\red70\green137\blue204;\red194\green126\blue101;\red54\green192\blue160;\red167\green197\blue152;
}
{\*\expandedcolortbl;;\cssrgb\c37647\c54510\c30588;\cssrgb\c13333\c13725\c21176;\cssrgb\c72941\c73333\c80000;
\cssrgb\c86275\c86275\c86275;\cssrgb\c33725\c61176\c83922;\cssrgb\c80784\c56863\c47059;\cssrgb\c23922\c78824\c69020;\cssrgb\c70980\c80784\c65882;
}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\deftab720
\pard\pardeftab720\partightenfactor0

\f0\fs24 \cf2 \cb3 \expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 // Right click on the script name and hit "Run" to execute\cf4 \cb1 \strokec4 \
\pard\pardeftab720\partightenfactor0
\cf5 \cb3 \strokec5 (\cf6 \strokec6 async\cf4 \strokec4  \cf5 \strokec5 ()\cf4 \strokec4  \cf5 \strokec5 =>\cf4 \strokec4  \cf5 \strokec5 \{\cf4 \cb1 \strokec4 \
\pard\pardeftab720\partightenfactor0
\cf4 \cb3     \cf6 \strokec6 try\cf4 \strokec4  \cf5 \strokec5 \{\cf4 \cb1 \strokec4 \
\cb3         console\cf5 \strokec5 .\cf4 \strokec4 log\cf5 \strokec5 (\cf7 \strokec7 'Running deployWithWeb3 script...'\cf5 \strokec5 )\cf4 \cb1 \strokec4 \
\cb3         \cb1 \
\cb3         \cf6 \strokec6 const\cf4 \strokec4  contractName \cf5 \strokec5 =\cf4 \strokec4  \cf7 \strokec7 'Storage'\cf4 \strokec4  \cf2 \strokec2 // Change this for other contract\cf4 \cb1 \strokec4 \
\cb3         \cf6 \strokec6 const\cf4 \strokec4  constructorArgs \cf5 \strokec5 =\cf4 \strokec4  \cf5 \strokec5 []\cf4 \strokec4     \cf2 \strokec2 // Put constructor args (if any) here for your contract\cf4 \cb1 \strokec4 \
\cb3     \cb1 \
\cb3         \cf2 \strokec2 // Note that the script needs the ABI which is generated from the compilation artifact.\cf4 \cb1 \strokec4 \
\cb3         \cf2 \strokec2 // Make sure contract is compiled and artifacts are generated\cf4 \cb1 \strokec4 \
\cb3         \cf6 \strokec6 const\cf4 \strokec4  artifactsPath \cf5 \strokec5 =\cf4 \strokec4  \cf7 \strokec7 `browser/contracts/artifacts/\cf5 \strokec5 $\{\cf4 \strokec4 contractName\cf5 \strokec5 \}\cf7 \strokec7 .json`\cf4 \strokec4  \cf2 \strokec2 // Change this for different path\cf4 \cb1 \strokec4 \
\
\cb3         \cf6 \strokec6 const\cf4 \strokec4  metadata \cf5 \strokec5 =\cf4 \strokec4  \cf8 \strokec8 JSON\cf5 \strokec5 .\cf4 \strokec4 parse\cf5 \strokec5 (\cf6 \strokec6 await\cf4 \strokec4  remix\cf5 \strokec5 .\cf4 \strokec4 call\cf5 \strokec5 (\cf7 \strokec7 'fileManager'\cf5 \strokec5 ,\cf4 \strokec4  \cf7 \strokec7 'getFile'\cf5 \strokec5 ,\cf4 \strokec4  artifactsPath\cf5 \strokec5 ))\cf4 \cb1 \strokec4 \
\cb3         \cf6 \strokec6 const\cf4 \strokec4  accounts \cf5 \strokec5 =\cf4 \strokec4  \cf6 \strokec6 await\cf4 \strokec4  web3\cf5 \strokec5 .\cf4 \strokec4 eth\cf5 \strokec5 .\cf4 \strokec4 getAccounts\cf5 \strokec5 ()\cf4 \cb1 \strokec4 \
\cb3     \cb1 \
\cb3         \cf6 \strokec6 let\cf4 \strokec4  contract \cf5 \strokec5 =\cf4 \strokec4  \cf6 \strokec6 new\cf4 \strokec4  web3\cf5 \strokec5 .\cf4 \strokec4 eth\cf5 \strokec5 .\cf8 \strokec8 Contract\cf5 \strokec5 (\cf4 \strokec4 metadata\cf5 \strokec5 .\cf4 \strokec4 abi\cf5 \strokec5 )\cf4 \cb1 \strokec4 \
\cb3     \cb1 \
\cb3         contract \cf5 \strokec5 =\cf4 \strokec4  contract\cf5 \strokec5 .\cf4 \strokec4 deploy\cf5 \strokec5 (\{\cf4 \cb1 \strokec4 \
\cb3             data\cf5 \strokec5 :\cf4 \strokec4  metadata\cf5 \strokec5 .\cf4 \strokec4 data\cf5 \strokec5 .\cf4 \strokec4 bytecode\cf5 \strokec5 .\cf4 \strokec4 object\cf5 \strokec5 ,\cf4 \cb1 \strokec4 \
\cb3             arguments\cf5 \strokec5 :\cf4 \strokec4  constructorArgs\cb1 \
\cb3         \cf5 \strokec5 \})\cf4 \cb1 \strokec4 \
\cb3     \cb1 \
\cb3         \cf6 \strokec6 const\cf4 \strokec4  newContractInstance \cf5 \strokec5 =\cf4 \strokec4  \cf6 \strokec6 await\cf4 \strokec4  contract\cf5 \strokec5 .\cf4 \strokec4 send\cf5 \strokec5 (\{\cf4 \cb1 \strokec4 \
\cb3             \cf6 \strokec6 from\cf5 \strokec5 :\cf4 \strokec4  accounts\cf5 \strokec5 [\cf9 \strokec9 0\cf5 \strokec5 ],\cf4 \cb1 \strokec4 \
\cb3             gas\cf5 \strokec5 :\cf4 \strokec4  \cf9 \strokec9 1500000\cf5 \strokec5 ,\cf4 \cb1 \strokec4 \
\cb3             gasPrice\cf5 \strokec5 :\cf4 \strokec4  \cf7 \strokec7 '30000000000'\cf4 \cb1 \strokec4 \
\cb3         \cf5 \strokec5 \})\cf4 \cb1 \strokec4 \
\cb3         console\cf5 \strokec5 .\cf4 \strokec4 log\cf5 \strokec5 (\cf7 \strokec7 'Contract deployed at address: '\cf5 \strokec5 ,\cf4 \strokec4  newContractInstance\cf5 \strokec5 .\cf4 \strokec4 options\cf5 \strokec5 .\cf4 \strokec4 address\cf5 \strokec5 )\cf4 \cb1 \strokec4 \
\cb3     \cf5 \strokec5 \}\cf4 \strokec4  \cf6 \strokec6 catch\cf4 \strokec4  \cf5 \strokec5 (\cf4 \strokec4 e\cf5 \strokec5 )\cf4 \strokec4  \cf5 \strokec5 \{\cf4 \cb1 \strokec4 \
\cb3         console\cf5 \strokec5 .\cf4 \strokec4 log\cf5 \strokec5 (\cf4 \strokec4 e\cf5 \strokec5 .\cf4 \strokec4 message\cf5 \strokec5 )\cf4 \cb1 \strokec4 \
\cb3     \cf5 \strokec5 \}\cf4 \cb1 \strokec4 \
\cb3   \cf5 \strokec5 \})()\cf4 \cb1 \strokec4 \
}
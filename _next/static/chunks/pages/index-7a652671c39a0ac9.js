(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5405],{48312:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(51409)}])},51409:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return pages}});var s=t(86854),a=t(67294),o=t(9008),r=t.n(o),i=t(41664),c=t.n(i),l=t(36612),d=t.n(l),p=t(92041),h=t(78538),m=t(25934),f=t(85893);function TreeNode(e){var n=e.node,t=e.style,s=e.dragHandle,o=n.data,r=o.href,i=o.target,l=o.name,d=o.icon,p=(0,a.useMemo)(function(){return i&&r?(0,f.jsx)("a",{href:r,target:i,children:"".concat(l," →")}):r?(0,f.jsx)(c(),{href:r,children:"".concat(l," →")}):(0,f.jsx)("span",{children:l})},[r,l,i]),h=(0,a.useMemo)(function(){return d?(0,f.jsx)("img",{alt:d,src:d,style:{width:"14px",height:"14px",borderRadius:"50%"}}):n.isInternal?n.isClosed?"\uD83D\uDCC1":"\uD83D\uDCC2":"\uD83D\uDC49"},[d,n.isClosed,n.isInternal]);return(0,f.jsx)("div",{style:t,ref:s,onClick:function(){return n.toggle()},children:(0,f.jsxs)("div",{style:{display:"flex",flexDirection:"row",alignItems:"center",cursor:n.isInternal?"pointer":void 0},children:[(0,f.jsx)("div",{style:{display:"flex",flexDirection:"row",alignItems:"center",minWidth:"16px",marginRight:"8px"},children:h}),p]})})}var u=[{id:m.Z(),name:"General",children:[{id:m.Z(),name:"iframe",href:"/iframe"},{id:m.Z(),name:"DeepLink",href:"/deeplink"},{id:m.Z(),name:"DappList",href:"/dappList"},{id:m.Z(),name:"Hardware SDK",href:"https://hardware-example.onekeytest.com/"}]},{id:m.Z(),name:"WalletConnect",children:[{id:m.Z(),name:"WalletConnect V1",href:"https://example.walletconnect.org",target:"WalletConnectExampleV1",icon:"https://example.walletconnect.org/favicon.ico"},{id:m.Z(),name:"WalletConnect V2",href:"https://react-app.walletconnect.com",target:"WalletConnectExampleV2",icon:"https://example.walletconnect.org/favicon.ico"},{id:m.Z(),name:"Aptos WalletConnect",href:"/aptosWalletconnect",icon:"https://onekey-asset.com/assets/apt/apt.png"},{id:m.Z(),name:"Algo WalletConnect",href:"/algoWalletConnect",icon:"https://onekey-asset.com/assets/algo/algo.png"}]},{id:m.Z(),name:"Networks",children:[{id:m.Z(),name:"EVM",href:"/ethereum",icon:"https://onekey-asset.com/assets/eth/eth.png"},{id:m.Z(),name:"Solana",href:"/solana",icon:"https://onekey-asset.com/assets/sol/sol.png"},{id:m.Z(),name:"NEAR",href:"/near",icon:"https://onekey-asset.com/assets/near/near.png"},{id:m.Z(),name:"NEAR ref-ui",href:"https://dapp-near-ref-ui.onekeytest.com",target:"_blank",icon:"https://onekey-asset.com/assets/near/near.png"},{id:m.Z(),name:"Starcoin",href:"/starcoin",icon:"https://onekey-asset.com/assets/stc/stc.png"},{id:m.Z(),name:"Aptos",href:"/aptos",icon:"https://onekey-asset.com/assets/apt/apt.png"},{id:m.Z(),name:"Aptos Martian",href:"/aptosMartian",icon:"https://onekey-asset.com/assets/apt/apt.png"},{id:m.Z(),name:"Conflux",href:"/conflux",icon:"https://onekey-asset.com/assets/cfx/cfx.png"},{id:m.Z(),name:"Tron",href:"/tron",icon:"https://onekey-asset.com/assets/trx/trx.png"},{id:m.Z(),name:"Sui Standard",href:"/suiStandard",icon:"https://onekey-asset.com/assets/sui/sui.png"},{id:m.Z(),name:"Cardano",href:"/cardano",icon:"https://onekey-asset.com/assets/ada/ada.png"},{id:m.Z(),name:"Cosmos",href:"/cosmos",icon:"https://onekey-asset.com/assets/cosmos/cosmos.png"},{id:m.Z(),name:"Polkadot",href:"/polkadot",icon:"https://onekey-asset.com/assets/polkadot/polkadot.png"}]}],pages=function(){(0,a.useEffect)(function(){fetch("/api/hello?_=".concat(Date.now()))},[]);var e=(0,a.useState)(""),n=(0,s.Z)(e,2),o=n[0],i=n[1];return(0,a.useEffect)(function(){var e,n,s;null==(e=t.g)||null==(n=e.$onekey)||null==(s=n.ethereum)||s.request({method:"net_version"}).then(function(e){i(e)})},[]),(0,f.jsxs)("div",{className:d().container,children:[(0,f.jsxs)(r(),{children:[(0,f.jsx)("title",{children:"Dapp Example - OneKey"}),(0,f.jsx)("meta",{name:"description",content:"Generated by create next app"}),(0,f.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,f.jsxs)("main",{className:d().main,children:[(0,f.jsx)(p.z,{onPress:function(){return window.location.reload()},children:"Refresh"}),(0,f.jsxs)("a",{children:["EVM-chainId=",o]}),(0,f.jsx)(h.mp,{height:900,initialData:u,rowHeight:38,indent:20,children:TreeNode})]}),(0,f.jsxs)("footer",{className:d().footer,children:[(0,f.jsxs)("a",{children:["v","1.1.49"]}),(0,f.jsx)("iframe",{src:"https://ghbtns.com/github-btn.html?user=OneKeyHQ&repo=cross-inpage-provider&type=star&count=true",frameBorder:"0",scrolling:"0",title:"GitHub",height:20,width:100}),(0,f.jsx)("a",{href:"https://www.onekey.so",target:"_blank",rel:"noopener noreferrer",children:"Powered by OneKey →"})]})]})}},36612:function(e){e.exports={container:"Home_container__d256j",main:"Home_main__VkIEL",footer:"Home_footer__yFiaX",title:"Home_title__hYX6j",description:"Home_description__uXNdx",code:"Home_code__VVrIr",grid:"Home_grid__AVljO",card:"Home_card__E5spL",logo:"Home_logo__IOQAX"}}},function(e){e.O(0,[1664,2041,9864,9774,2888,179],function(){return e(e.s=48312)}),_N_E=e.O()}]);
//# sourceMappingURL=index-7a652671c39a0ac9.js.map
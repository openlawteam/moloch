(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2158],{3905:function(e,t,o){"use strict";o.d(t,{Zo:function(){return d},kt:function(){return h}});var n=o(7294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(o),h=a,f=p["".concat(l,".").concat(h)]||p[h]||u[h]||r;return o?n.createElement(f,i(i({ref:t},d),{},{components:o})):n.createElement(f,i({ref:t},d))}));function h(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=o.length,i=new Array(r);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<r;c++)i[c]=o[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}p.displayName="MDXCreateElement"},4941:function(e,t,o){"use strict";o.r(t),o.d(t,{frontMatter:function(){return s},metadata:function(){return l},toc:function(){return c},default:function(){return u}});var n=o(2122),a=o(9756),r=(o(7294),o(3905)),i=["components"],s={id:"offchain-voting-adapter",title:"Offchain"},l={unversionedId:"contracts/adapters/voting/offchain-voting-adapter",id:"contracts/adapters/voting/offchain-voting-adapter",isDocsHomePage:!1,title:"Offchain",description:"This adapter manages offchain voting using a merkle tree to commit to a result that can be challenge during the grace period if necessary.",source:"@site/docs/contracts/adapters/voting/OffchainVoting.md",sourceDirName:"contracts/adapters/voting",slug:"/contracts/adapters/voting/offchain-voting-adapter",permalink:"/tribute-contracts/docs/contracts/adapters/voting/offchain-voting-adapter",editUrl:"https://github.com/openlawteam/tribute-contracts/edit/docs/website/docs/contracts/adapters/voting/OffchainVoting.md",version:"current",frontMatter:{id:"offchain-voting-adapter",title:"Offchain"},sidebar:"docs",previous:{title:"Batch",permalink:"/tribute-contracts/docs/contracts/adapters/voting/batch-voting-adapter"},next:{title:"Bank",permalink:"/tribute-contracts/docs/contracts/adapters/utils/bank-adapter"}},c=[{value:"General concept",id:"general-concept",children:[]},{value:"Adapter configuration",id:"adapter-configuration",children:[{value:"VotingPeriod = keccak256(&quot;voting.votingPeriod&quot;)",id:"votingperiod--keccak256votingvotingperiod",children:[]},{value:"GracePeriod = keccak256(&quot;voting.gracePeriod&quot;)",id:"graceperiod--keccak256votinggraceperiod",children:[]},{value:"FallbackThreshold = keccak256(&quot;offchainvoting.fallbackThreshold&quot;)",id:"fallbackthreshold--keccak256offchainvotingfallbackthreshold",children:[]}]},{value:"Functions description, assumptions, checks, dependencies, interactions and access control",id:"functions-description-assumptions-checks-dependencies-interactions-and-access-control",children:[{value:"function adminFailProposal(DaoRegistry dao, bytes32 proposalId)",id:"function-adminfailproposaldaoregistry-dao-bytes32-proposalid",children:[]},{value:"function submitVoteResult(DaoRegistry dao, bytes32 proposalId, bytes32 resultRoot, VoteResultNode memory result) external",id:"function-submitvoteresultdaoregistry-dao-bytes32-proposalid-bytes32-resultroot-voteresultnode-memory-result-external",children:[]},{value:"function voteResult(DaoRegistry dao, bytes32 proposalId) returns (VotingState state)",id:"function-voteresultdaoregistry-dao-bytes32-proposalid-returns-votingstate-state",children:[]},{value:"function challengeBadNode(DaoRegistry dao, bytes32 proposalId, VoteResultNode memory nodeCurrent) external",id:"function-challengebadnodedaoregistry-dao-bytes32-proposalid-voteresultnode-memory-nodecurrent-external",children:[]},{value:"function _isValidChoice(uint256 choice) internal pure returns (bool)",id:"function-_isvalidchoiceuint256-choice-internal-pure-returns-bool",children:[]},{value:"function challengeBadStep(DaoRegistry dao, bytes32 proposalId, VoteResultNode memory nodePrevious, VoteResultNode memory nodeCurrent) external",id:"function-challengebadstepdaoregistry-dao-bytes32-proposalid-voteresultnode-memory-nodeprevious-voteresultnode-memory-nodecurrent-external",children:[]},{value:"function requestFallback(DaoRegistry dao, bytes32 proposalId) external onlyMember(dao)",id:"function-requestfallbackdaoregistry-dao-bytes32-proposalid-external-onlymemberdao",children:[]},{value:"function sponsorChallengeProposal(DaoRegistry dao, bytes32 proposalId, address sponsoredBy)",id:"function-sponsorchallengeproposaldaoregistry-dao-bytes32-proposalid-address-sponsoredby",children:[]},{value:"function processChallengeProposal(DaoRegistry dao, bytes32 proposalId)",id:"function-processchallengeproposaldaoregistry-dao-bytes32-proposalid",children:[]}]}],d={toc:c};function u(e){var t=e.components,o=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This adapter manages offchain voting using a merkle tree to commit to a result that can be challenge during the grace period if necessary."),(0,r.kt)("p",null,"There are also two fallback solutions implemented:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"fallback voting that falls back to simple onchain voting if something is wrong"),(0,r.kt)("li",{parentName:"ul"},"admin force fail proposal to mark a proposal as failed by an admin if necessary. This is present until a more formal verfication of the system is done")),(0,r.kt)("h3",{id:"general-concept"},"General concept"),(0,r.kt)("p",null,"The idea is to use a merkle tree to commit to a computation (calculate the result) and have a way to challenge a result if anyone sees an issue in the computation."),(0,r.kt)("p",null,"The approach assumes data availability."),(0,r.kt)("p",null,'Each leaf in the merkle tree is a "step" in computing the vote result. The last leaf is the result (and the leaf submitted).'),(0,r.kt)("p",null,"This works with a modified version of snapshot that uses ERC-712 for hashing / signing proposals and votes"),(0,r.kt)("h2",{id:"adapter-configuration"},"Adapter configuration"),(0,r.kt)("h3",{id:"votingperiod--keccak256votingvotingperiod"},'VotingPeriod = keccak256("voting.votingPeriod")'),(0,r.kt)("p",null,"How long does a vote occur."),(0,r.kt)("h3",{id:"graceperiod--keccak256votinggraceperiod"},'GracePeriod = keccak256("voting.gracePeriod")'),(0,r.kt)("p",null,"How long does anyeone have to challenge a result if an issue is spotted."),(0,r.kt)("h3",{id:"fallbackthreshold--keccak256offchainvotingfallbackthreshold"},'FallbackThreshold = keccak256("offchainvoting.fallbackThreshold")'),(0,r.kt)("p",null,"What threshold ( in % ) of members need to request a fallback voting for it to kick in."),(0,r.kt)("h2",{id:"functions-description-assumptions-checks-dependencies-interactions-and-access-control"},"Functions description, assumptions, checks, dependencies, interactions and access control"),(0,r.kt)("h3",{id:"function-adminfailproposaldaoregistry-dao-bytes32-proposalid"},"function adminFailProposal(DaoRegistry dao, bytes32 proposalId)"),(0,r.kt)("p",null,"Admin function (only owner can call it) to fail a proposal. Used as a failsafe if anything goes wrong since the adapter is still new"),(0,r.kt)("h3",{id:"function-submitvoteresultdaoregistry-dao-bytes32-proposalid-bytes32-resultroot-voteresultnode-memory-result-external"},"function submitVoteResult(DaoRegistry dao, bytes32 proposalId, bytes32 resultRoot, VoteResultNode memory result) external"),(0,r.kt)("p",null,"Submits a new vote result for a specific dao / proposalId.\nresult is the last step that contains the vote result.\nresultRoot is the merkle root of the computation merkle tree."),(0,r.kt)("p",null,"If a result has been already published, it checks whether this one has more steps (index is higher) or if the vote is already finished."),(0,r.kt)("p",null,"If the voting period is not done yet but the result cannot be changed anymore (50+% have voted either yes or no), the grace period starts right away"),(0,r.kt)("h3",{id:"function-voteresultdaoregistry-dao-bytes32-proposalid-returns-votingstate-state"},"function voteResult(DaoRegistry dao, bytes32 proposalId) returns (VotingState state)"),(0,r.kt)("p",null,"Returns the status of a vote session."),(0,r.kt)("h3",{id:"function-challengebadnodedaoregistry-dao-bytes32-proposalid-voteresultnode-memory-nodecurrent-external"},"function challengeBadNode(DaoRegistry dao, bytes32 proposalId, VoteResultNode memory nodeCurrent) external"),(0,r.kt)("p",null,"Checks and marks a result as bad if a specific node has bad data.\nThe checks are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"bad signature"),(0,r.kt)("li",{parentName:"ul"},"invalid choice"),(0,r.kt)("li",{parentName:"ul"},"bad proposalHash"),(0,r.kt)("li",{parentName:"ul"},"vote timestamp is after the current grace period started")),(0,r.kt)("h3",{id:"function-_isvalidchoiceuint256-choice-internal-pure-returns-bool"},"function ","_","isValidChoice(uint256 choice) internal pure returns (bool)"),(0,r.kt)("p",null,"function defining what a valid choice is"),(0,r.kt)("h3",{id:"function-challengebadstepdaoregistry-dao-bytes32-proposalid-voteresultnode-memory-nodeprevious-voteresultnode-memory-nodecurrent-external"},"function challengeBadStep(DaoRegistry dao, bytes32 proposalId, VoteResultNode memory nodePrevious, VoteResultNode memory nodeCurrent) external"),(0,r.kt)("p",null,"Checks that the step from a node to another is correct or not\nlet's define a step function S(state, choice) that creates a new state based on a previous one and a choice\nWe check that S(previousState, currentChoice) = currentState\nIf not, we challenge the result"),(0,r.kt)("h3",{id:"function-requestfallbackdaoregistry-dao-bytes32-proposalid-external-onlymemberdao"},"function requestFallback(DaoRegistry dao, bytes32 proposalId) external onlyMember(dao)"),(0,r.kt)("p",null,"If something is wrong with the vote but it is not possible to challenge it, members can request a fallback"),(0,r.kt)("h3",{id:"function-sponsorchallengeproposaldaoregistry-dao-bytes32-proposalid-address-sponsoredby"},"function sponsorChallengeProposal(DaoRegistry dao, bytes32 proposalId, address sponsoredBy)"),(0,r.kt)("p",null,"If a result has been challenged, it is needed to vote on the faith of the reporter. Should he continue being a member or should he be banned."),(0,r.kt)("h3",{id:"function-processchallengeproposaldaoregistry-dao-bytes32-proposalid"},"function processChallengeProposal(DaoRegistry dao, bytes32 proposalId)"),(0,r.kt)("p",null,"Process the vote for the faith of a bad reporter"))}u.isMDXComponent=!0}}]);
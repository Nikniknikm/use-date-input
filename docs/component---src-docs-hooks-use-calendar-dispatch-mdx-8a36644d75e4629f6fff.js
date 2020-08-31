(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{"L2/h":function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return p})),n.d(t,"default",(function(){return O}));var a=n("Fcif"),r=n("+I+c"),c=(n("mXGw"),n("/FXl")),o=n("TjRS"),d=n("ZFoC"),i=n("GYKu"),s=n("9b5V"),u=n("0rkN"),l=n("OWCF"),p=(n("aD51"),{});void 0!==p&&p&&p===Object(p)&&Object.isExtensible(p)&&!p.hasOwnProperty("__filemeta")&&Object.defineProperty(p,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/docs/hooks/useCalendarDispatch.mdx"}});b="MyPanel";var b,h={_frontmatter:p},m=o.a;function O(e){var t,n,b=e.components,O=Object(r.a)(e,["components"]);return Object(c.b)(m,Object(a.a)({},h,O,{components:b,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"usecalendardispatch"},"useCalendarDispatch"),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"useCalendarDispatch")," returns the configured reducers dispatcher, along with a helper API for common actions. "),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"const {\n    dispatch,\n    mouseClickOutside,\n    navigateNext,\n    navigatePrevious,\n    selectDate,\n    setAnimating,\n    setEnableKeyboardNavigation,\n    setKeyboardCursor,\n    setMouseCursor,\n    setEndDate,\n    setStartDate,\n    setOpen,\n    setKeyPress,\n    setVisibleFromDate\n} = useCalendarDispatch();\n")),Object(c.b)("h2",{id:"using-the-dispatcher"},"Using the dispatcher"),Object(c.b)("p",null,"Using the dispatcher we can dispatch any action to the reducers."),Object(c.b)(d.c,{__position:0,__code:"() => {\n  const MyPanel = () => {\n    const { dispatch } = useCalendarDispatch()\n    const handleClick = () => dispatch({ type: calendarActions.navigateNext })\n    return (\n      <ButtonBar>\n        <Button onClick={handleClick}>NEXT MONTH</Button>\n      </ButtonBar>\n    )\n  }\n  return (\n    <CalendarProvider adapter={dateAdapter}>\n      <MyPanel />\n      <Calendar />\n    </CalendarProvider>\n  )\n}",__scope:(t={props:O,DefaultLayout:o.a,Playground:d.c,calendarActions:i.m,useCalendarDispatch:i.q,Calendar:i.c,CalendarProvider:i.d,dateAdapter:s.a,Button:u.a,ButtonBar:l.a},t.DefaultLayout=o.a,t._frontmatter=p,t),mdxType:"Playground"},(function(){return Object(c.b)(i.d,{adapter:s.a,mdxType:"CalendarProvider"},Object(c.b)((function(){var e=Object(i.q)().dispatch;return Object(c.b)(l.a,{mdxType:"ButtonBar"},Object(c.b)(u.a,{onClick:function(){return e({type:i.m.navigateNext})},mdxType:"Button"},"NEXT MONTH"))}),{mdxType:"MyPanel"}),Object(c.b)(i.c,{mdxType:"Calendar"}))})),Object(c.b)("h2",{id:"using-the-helper-api"},"Using the helper API"),Object(c.b)("p",null,"Using the dispatcher we can dispatch the most common actions, through helper methods."),Object(c.b)(d.c,{__position:1,__code:"() => {\n  function MyPanel() {\n    const { navigateNext } = useCalendarDispatch()\n    const handleClick = () => navigateNext()\n    return (\n      <ButtonBar>\n        <Button onClick={handleClick}>NEXT MONTH</Button>\n      </ButtonBar>\n    )\n  }\n  return (\n    <CalendarProvider adapter={dateAdapter}>\n      <MyPanel />\n      <Calendar />\n    </CalendarProvider>\n  )\n}",__scope:(n={props:O,DefaultLayout:o.a,Playground:d.c,calendarActions:i.m,useCalendarDispatch:i.q,Calendar:i.c,CalendarProvider:i.d,dateAdapter:s.a,Button:u.a,ButtonBar:l.a},n.DefaultLayout=o.a,n._frontmatter=p,n),mdxType:"Playground"},(function(){return Object(c.b)(i.d,{adapter:s.a,mdxType:"CalendarProvider"},Object(c.b)((function(){var e=Object(i.q)().navigateNext;return Object(c.b)(l.a,{mdxType:"ButtonBar"},Object(c.b)(u.a,{onClick:function(){return e()},mdxType:"Button"},"NEXT MONTH"))}),{mdxType:"MyPanel"}),Object(c.b)(i.c,{mdxType:"Calendar"}))})))}void 0!==O&&O&&O===Object(O)&&Object.isExtensible(O)&&!O.hasOwnProperty("__filemeta")&&Object.defineProperty(O,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/docs/hooks/useCalendarDispatch.mdx"}}),O.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-docs-hooks-use-calendar-dispatch-mdx-8a36644d75e4629f6fff.js.map
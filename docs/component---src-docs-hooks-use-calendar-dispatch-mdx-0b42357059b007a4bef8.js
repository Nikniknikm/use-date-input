(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{"L2/h":function(e,a,t){"use strict";t.r(a),t.d(a,"_frontmatter",(function(){return l})),t.d(a,"default",(function(){return h}));var n=t("Fcif"),r=t("+I+c"),c=(t("mXGw"),t("/FXl")),i=t("TjRS"),o=t("ZFoC"),d=t("GYKu"),s=t("9b5V"),l=(t("aD51"),{});void 0!==l&&l&&l===Object(l)&&Object.isExtensible(l)&&!l.hasOwnProperty("__filemeta")&&Object.defineProperty(l,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/docs/hooks/useCalendarDispatch.mdx"}});u="MyPanel";var u,p={_frontmatter:l},b=i.a;function h(e){var a,t,u=e.components,h=Object(r.a)(e,["components"]);return Object(c.b)(b,Object(n.a)({},p,h,{components:u,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"usecalendardispatch"},"useCalendarDispatch"),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"useCalendarDispatch")," returns the configured reducers dispatcher, along with a helper API for common actions. "),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"const {\n    dispatch,\n    mouseClickOutside,\n    navigateNext,\n    navigatePrevious,\n    selectDate,\n    setAnimating,\n    setEnableKeyboardNavigation,\n    setKeyboardCursor,\n    setMouseCursor,\n    setEndDate,\n    setStartDate,\n    setOpen,\n    setKeyPress,\n    setVisibleFromDate\n} = useCalendarDispatch();\n")),Object(c.b)("h2",{id:"using-the-dispatcher"},"Using the dispatcher"),Object(c.b)(o.c,{__position:0,__code:"() => {\n  const MyPanel = () => {\n    const { dispatch } = useCalendarDispatch()\n    const handleClick = () => dispatch({ type: calendarActions.navigateNext })\n    return <button onClick={handleClick}>Dispatch 'navigateNext'</button>\n  }\n  return (\n    <CalendarProvider adapter={dateAdapter}>\n      <MyPanel />\n      <Calendar />\n    </CalendarProvider>\n  )\n}",__scope:(a={props:h,DefaultLayout:i.a,Playground:o.c,calendarActions:d.f,useCalendarDispatch:d.h,Calendar:d.a,CalendarProvider:d.b,dateAdapter:s.a},a.DefaultLayout=i.a,a._frontmatter=l,a),mdxType:"Playground"},(function(){return Object(c.b)(d.b,{adapter:s.a,mdxType:"CalendarProvider"},Object(c.b)((function(){var e=Object(d.h)().dispatch;return Object(c.b)("button",{onClick:function(){return e({type:d.f.navigateNext})}},"Dispatch 'navigateNext'")}),{mdxType:"MyPanel"}),Object(c.b)(d.a,{mdxType:"Calendar"}))})),Object(c.b)("h2",{id:"using-the-helper-api"},"Using the helper API"),Object(c.b)(o.c,{__position:1,__code:"() => {\n  const MyPanel = () => {\n    const { navigateNext } = useCalendarDispatch()\n    const handleClick = () => navigateNext()\n    return <button onClick={handleClick}>navigateNext</button>\n  }\n  return (\n    <CalendarProvider adapter={dateAdapter}>\n      <MyPanel />\n      <Calendar />\n    </CalendarProvider>\n  )\n}",__scope:(t={props:h,DefaultLayout:i.a,Playground:o.c,calendarActions:d.f,useCalendarDispatch:d.h,Calendar:d.a,CalendarProvider:d.b,dateAdapter:s.a},t.DefaultLayout=i.a,t._frontmatter=l,t),mdxType:"Playground"},(function(){return Object(c.b)(d.b,{adapter:s.a,mdxType:"CalendarProvider"},Object(c.b)((function(){var e=Object(d.h)().navigateNext;return Object(c.b)("button",{onClick:function(){return e()}},"navigateNext")}),{mdxType:"MyPanel"}),Object(c.b)(d.a,{mdxType:"Calendar"}))})))}void 0!==h&&h&&h===Object(h)&&Object.isExtensible(h)&&!h.hasOwnProperty("__filemeta")&&Object.defineProperty(h,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/docs/hooks/useCalendarDispatch.mdx"}}),h.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-docs-hooks-use-calendar-dispatch-mdx-0b42357059b007a4bef8.js.map
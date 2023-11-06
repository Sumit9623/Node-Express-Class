

//  in server side rendering when request come from client first it  will be routed by maching url
//  controller function is called by router at there we can do serverside renderindg
//  and for perticular page we can send modified HTML page
//  in this react does not come in picture


// Tags Used in ejs file are --> (first 3 are most commom+n)
// <%   'Scriptlet' tag, for control-flow, no output
// <%=   Outputs the value into the template (HTML escaped)
// %>    Plain ending tag
// <%_   ‘Whitespace Slurping’ Scriptlet tag, strips all whitespace before it
// <%-   Outputs the unescaped value into the template
// <%#   Comment tag, no execution, no output
// <%%   Outputs a literal '<%'
// -%>   Trim-mode ('newline slurp') tag, trims following newline
// _%>  ‘Whitespace Slurping’ ending tag, removes all whitespace after it
function ttt() {
  var vnodes146375 = []
  var vnode146375 = {
    nodeType:1,
    type: "div",
    props:{},
    children: [],
    isVoidTag: false,
    template: ""}
  vnode146375.props.id = "avalon-modal"
  vnode146375.props["class"] = "modal fade"
  vnode146375.order = "ms-controller;;ms-class;;ms-on-click-0"
  if(!vnodes146375.vm){ vnodes146375.vm = __vmodel__}
  __vmodel__ = vnodes146375.vm || __vmodel__
  vnode146375.props["ms-controller"] = "modal";
  var vm146375 = avalon.vmodels["modal"]
  if(!vm146375){return }
  vnode146375.bottom = vm146375
  if(__vmodel__){
    vnode146375.top = __vmodel__
    var __id__ = __vmodel__.$id+ "_" + "modal"
    __vmodel__ = avalon.caches[__id__] || (avalon.caches[__id__] = avalon.mediatorFactory(__vmodel__,vm146375))
    vnode146375.mediator = __vmodel__
  }else{
    __vmodel__ = vm146375
  }
  if(!avalon.skipController(__fast__, vnode146375.bottom)){
    vnode146375.props["ms-class"] = (function(){
      try{
        var __value__ = {in:__vmodel__.showed,show:__vmodel__.show}
        return __value__
      }catch(e){
        avalon.warn(e, "parse class binding\u3010 {in:@showed,show:@show} \u3011fail")
        return ""
      }
    })();
    vnode146375.onVm = __vmodel__
    vnode146375.props["ms-on-click-0"] = avalon.eventListeners.e956572046091
    vnode146375.children = (function(){

      var vnodes146375 = []
      var vnode146375 = {
        nodeType:1,
        type: "div",
        props:{},
        children: [],
        isVoidTag: false,
        template: ""}
      vnode146375.props["class"] = "modal-dialog"
      vnode146375.order = "ms-on-click-0"
      vnode146375.onVm = __vmodel__
      vnode146375.props["ms-on-click-0"] = avalon.eventListeners.e334402961017
      vnode146375.children = (function(){

        var vnodes146375 = []
        var vnode146375 = {type:"#text",nodeType:3,skipContent:true}
        vnode146375.nodeValue = ""
        vnodes146375.push(vnode146375)
        var vnode146375 = {
          nodeType:1,
          type: "div",
          props:{},
          children: [],
          isVoidTag: false,
          template: ""}
        vnode146375.props["class"] = "modal-content"
        vnode146375.skipAttrs = true
        vnode146375.children = (function(){

          var vnodes146375 = []
          var vnode146375 = {type:"#text",nodeType:3,skipContent:true}
          vnode146375.nodeValue = ""
          vnodes146375.push(vnode146375)
          var vnode146375 = {
            nodeType:1,
            type: "div",
            props:{},
            children: [],
            isVoidTag: false,
            template: ""}
          vnode146375.props["class"] = "modal-header"
          vnode146375.skipAttrs = true
          vnode146375.children = (function(){

            var vnodes146375 = []
            var vnode146375 = {
              nodeType:1,
              type: "button",
              props:{},
              children: [],
              isVoidTag: false,
              template: ""}
            vnode146375.props["class"] = "close"
            vnode146375.props.type = "button"
            vnode146375.props["aria-label"] = "Close"
            vnode146375.props["data-dismiss"] = "modal"
            vnode146375.order = "ms-on-click-0"
            vnode146375.onVm = __vmodel__
            vnode146375.props["ms-on-click-0"] = avalon.eventListeners.undefined
            vnode146375.template = "<SPAN aria-hidden=true>\u00d7</SPAN>"
            vnodes146375.push(vnode146375)
            var vnode146375 = {type:"#text",nodeType:3,skipContent:true}
            vnode146375.nodeValue = ""
            vnodes146375.push(vnode146375)
            var vnode146375 = {
              nodeType:1,
              type: "h4",
              props:{},
              children: [],
              isVoidTag: false,
              template: ""}
            vnode146375.props["class"] = "modal-title"
            vnode146375.skipAttrs = true
            vnode146375.template = "Modal title"
            vnodes146375.push(vnode146375)


            return vnodes146375
          })();

          vnodes146375.push(vnode146375)
          var vnode146375 = {type:"#text",nodeType:3,skipContent:true}
          vnode146375.nodeValue = ""
          vnodes146375.push(vnode146375)
          var vnode146375 = {
            nodeType:1,
            type: "div",
            props:{},
            children: [],
            isVoidTag: false,
            template: ""}
          vnode146375.props["class"] = "modal-body"
          vnode146375.skipAttrs = true
          vnode146375.children = (function(){

            var vnodes146375 = []
            var vnode146375 = {type:"#text",nodeType:3,skipContent:true}
            vnode146375.nodeValue = ""
            vnodes146375.push(vnode146375)
            var vnode146375 = {
              nodeType:1,
              type: "p",
              props:{},
              children: [],
              isVoidTag: false,
              template: ""}
            vnode146375.skipAttrs = true
            vnode146375.template = "One fine body"
            vnodes146375.push(vnode146375)
            var vnode146375 = {type:"#text",nodeType:3,skipContent:true}
            vnode146375.nodeValue = ""
            vnodes146375.push(vnode146375)
            var vnode146375 = {
              nodeType:1,
              type: "p",
              props:{},
              children: [],
              isVoidTag: false,
              template: ""}
            vnode146375.skipAttrs = true
            vnode146375.children = (function(){

              var vnodes146375 = []
              var vnode146375 = {type:"#text",nodeType:3,skipContent:true}
              vnode146375.nodeValue = (function(){
                try{
                  var __value__ = __vmodel__.show
                  return __value__ == null ? "" :__value__
                }catch(e){
                  avalon.warn(e, "parse text binding\u3010 @show \u3011fail")
                  return ""
                }
              })()
              vnode146375.fixIESkip = true
              vnode146375.skipContent = false
              vnodes146375.push(vnode146375)


              return vnodes146375
            })();

            vnodes146375.push(vnode146375)
            var vnode146375 = {type:"#text",nodeType:3,skipContent:true}
            vnode146375.nodeValue = ""
            vnodes146375.push(vnode146375)
            var vnode146375 = {
              nodeType:1,
              type: "p",
              props:{},
              children: [],
              isVoidTag: false,
              template: ""}
            vnode146375.skipAttrs = true
            vnode146375.children = (function(){

              var vnodes146375 = []
              var vnode146375 = {type:"#text",nodeType:3,skipContent:true}
              vnode146375.nodeValue = (function(){
                try{
                  var __value__ = __vmodel__.showed
                  return __value__ == null ? "" :__value__
                }catch(e){
                  avalon.warn(e, "parse text binding\u3010 @showed \u3011fail")
                  return ""
                }
              })()
              vnode146375.fixIESkip = true
              vnode146375.skipContent = false
              vnodes146375.push(vnode146375)


              return vnodes146375
            })();

            vnodes146375.push(vnode146375)


            return vnodes146375
          })();

          vnodes146375.push(vnode146375)
          var vnode146375 = {type:"#text",nodeType:3,skipContent:true}
          vnode146375.nodeValue = ""
          vnodes146375.push(vnode146375)
          var vnode146375 = {
            nodeType:1,
            type: "div",
            props:{},
            children: [],
            isVoidTag: false,
            template: ""}
          vnode146375.props["class"] = "modal-footer"
          vnode146375.skipAttrs = true
          vnode146375.template = "<BUTTON class=\"btn btn-default\" type=button>Close</BUTTON><BUTTON class=\"btn btn-primary\" type=button>Save changes</BUTTON>"
          vnodes146375.push(vnode146375)


          return vnodes146375
        })();

        vnodes146375.push(vnode146375)


        return vnodes146375
      })();

      vnodes146375.push(vnode146375)


      return vnodes146375
    })();

    vnodes146375.push(vnode146375)
  }

  return vnodes146375
}
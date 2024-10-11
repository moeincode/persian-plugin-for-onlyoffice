(function(window, undefined){
    window.Asc.plugin.init = function() {
      // Detect if Persian text is used in the document
      var editor = window.Asc.scope;
      var content = editor.GetText();
      
      // If Persian text is detected, apply the correct font
      if(/[\u0600-\u06FF]/.test(content)) { // regex to detect Persian characters
        // Apply a font that supports Persian, e.g., "Vazir"
        editor.ReplaceFont("default", "Vazir");
      }
    };
  
    window.Asc.plugin.button = function(id) {
      this.executeCommand("close", "");
    };
  })(window, undefined);
  
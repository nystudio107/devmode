/* -- A listener to ensure the fonts we need to use have been loaded */

if (document.documentElement.className.indexOf( "fonts-loaded" ) < 0 ) {
    var fontello = new FontFaceObserver("fontello", {
    });
    var OperatorMonoRegular = new FontFaceObserver("Operator Mono", {
    });
    var OperatorMonoItalic = new FontFaceObserver("Operator Mono", {
    });

    Promise.all([
        OperatorMonoRegular.load(),
        OperatorMonoItalic.load(),
    ]).then(function() {

      document.documentElement.className += " fonts-loaded";
      Cookie.set('fonts-loaded', 1, { expires: '7D', secure: true });
    });
}

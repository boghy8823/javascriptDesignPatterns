(function() {
  $(document).ready(function() {
    var canvas, choc, editor, pad, parabola;
    choc = window.choc;
    parabola = "var shift = 0;\n\
while (shift <= 200) {\n\
pad.makeLine(shift, 0, 200, shift);\n\
shift += 14;\n\
}";
    pad = new Two({
      width: 200,
      height: 200,
      type: Two.Types.canvas
    }).appendTo(document.getElementById('parabola-canvas'));
    if (window.devicePixelRatio === 2) {
      canvas = pad.renderer.domElement;
      canvas.setAttribute('width', canvas.width * 2);
      canvas.setAttribute('height', canvas.height * 2);
      pad.renderer.ctx.scale(2, 2);
    }
    editor = new choc.Editor({
      $: $,
      id: "#choc-editor-for-parabola",
      code: parabola,
      beforeScrub: function() {
        return pad.clear();
      },
      afterScrub: function() {
        return pad.update();
      },
      locals: {
        pad: pad
      }
    });
    editor.start();
    return window.parabolaEditor = editor;
  });

}).call(this);
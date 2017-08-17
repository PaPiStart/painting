let startScript = canvasId => {
    $(() => {
        drawing = new RecordableDrawing(canvasId);

        let setDraw = (color = $('.selectedColor').css("background-color"), size = $('.stroke_selected').css("border-radius"), cursorStyle = 'default') => {
            drawing.setColor(color);
            drawing.setStokeSize(parseInt(size));
            $('#canvas1').css('cursor', cursorStyle);
        };

        //del
        $('.del').click(() => {
            drawing.clearCanvas();
            setDraw();
        });
        //clear
        $('.clear').click(e => {
            e.stopPropagation();
            setDraw($('.clearWhite').css("background-color"), 24, 'url(cur.ico), auto');
        });
        //pen
        $('.pen').click(() => {
            setDraw();
        });
        //stroke
        $(".stroke").click(function() {
            $(".stroke_selected").removeClass("stroke_selected");
            $(this).addClass("stroke_selected");
            setDraw();
        });
        //setColor
        $("#colorsDiv .colorbox").click(function() {
            $("#colorsDiv .colorbox").removeClass("selectedColor");
            $(this).addClass("selectedColor");
            setDraw();
        });
    });
}
startScript('canvas1');
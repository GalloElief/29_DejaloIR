<!-- esfera -->
<script src="js/tagcanvas.min.js" type="text/javascript"></script>
<script type="text/javascript">
window.onload = function() {
try {
TagCanvas.Start('myCanvas','tags',{
textColour: 'black',
outlineColour: '#ff00ff',
reverse: true,
depth: 0.8,
maxSpeed: 0.05
});
} catch(e) {
// something went wrong, hide the canvas container
document.getElementById('myCanvasContainer').style.display = 'none';
}
};
</script><!-- fin de esfera -->
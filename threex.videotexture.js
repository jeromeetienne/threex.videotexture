var THREEx = THREEx || {}

THREEx.VideoTexture	= function(url){

	var options = {
    loop: true,
    autoplay: true
  };
  if (customOptions.hasOwnProperty('loop')) options.loop = customOptions.loop;
  if (customOptions.hasOwnProperty('autoplay')) options.autoplay = customOptions.autoplay;

	// create the video element
	var video	= document.createElement('video');
	video.width	= 320;
	video.height	= 240;
	video.autoplay	= options.autoplay;
	video.loop	= options.loop;
	video.src	= url;
	// expose video as this.video
	this.video	= video

	// create the texture
	var texture	= new THREE.Texture( video );
	// expose texture as this.texture
	this.texture	= texture

	/**
	 * update the object
	 */
	this.update	= function(){
		if( video.readyState !== video.HAVE_ENOUGH_DATA )	return;
		texture.needsUpdate	= true;
	}

	/**
	 * destroy the object
	 */
	this.destroy	= function(){
		video.pause()
	}
}

(function (document) {

	// Dummy JSON for Image Path.
	var catImages = {
	    "title": "Cat Slideshow",
	    "images": [
	        {
	            "path": "images/200_cute_cat_praying-1920x1200.jpg"
	        },
	        {
	            "path": "images/200_Cute-Cats-007.jpg"
	        },
	        {
	            "path": "images/200_Cute-Cats-008.jpg"
	        },
	        {
	            "path": "images/200_Cute-Cats-063.jpg"
	        },
	        {
	            "path": "images/200_Cute-Cats-101.jpg"
	        },
	        {
	            "path": "images/tumblr_m2sv7p4ayD1r73wdao1_250.gif"
	        },
	        {
	            "path": "images/Animals_Cats_Wallpapers.jpg"
	        }
	    ]
	};

	// Slider Constructor
	var Slider = function () {
		this.length = 0;
		this.current = 0;
		this.imgArray = [];
		this.imgRef = null;
		this.parentEl = null;
		};

	// Method to have images path
	Slider.prototype.makeReq = function(url) {
		var oThis = this;

		oThis.imgArray = catImages.images;
		oThis.length = oThis.imgArray.length;
		oThis.showCount();
		oThis.startSlide();

	};

	Slider.prototype.startSlide = function () {
		var oThis = this,
			countElm = document.getElementsByClassName('round');

		oThis.imgRef.src = this.imgArray[this.current].path;

		for (var i = 0; i < countElm.length; i++) {
			countElm[i].classList.remove("selected");
		}

		countElm[this.current].classList.add("selected");
	};

	Slider.prototype.moveNext = function () {
		var oThis = this;

		if (oThis.current == oThis.length - 1) {
			oThis.current = 0;
		}
		else {
			oThis.current++;
		}

		oThis.startSlide();
	};

	Slider.prototype.movePre = function () {
		var oThis = this;

		if (oThis.current === 0) {
			oThis.current = oThis.length - 1;
		}

		else {
			oThis.current--;
		}

		oThis.startSlide();
	};

	Slider.prototype.showCount = function () {
		var oThis = this,
			temp = [],
			elm,
			parent = document.createElement("div"),
			imgArray = oThis.imgArray;
			length = imgArray.length;

		parent.className = "parentRound";

		for (var i = 0; i < length; i++) {
			elm = document.createElement("div");
			elm.className = "round";
			parent.appendChild(elm);
		}

		oThis.parentEl.appendChild(parent);
	};


	var initSlideShow = function (el, url) {

		var slider = new Slider();
		

		var divWrapper = document.createElement("div"),
			img = document.createElement("img"),
			divButton = document.createElement("div"),
			buttonNext = document.createElement("button"),
			buttonPre = document.createElement("button"),
			label = document.createElement("label"),
			textNode = document.createTextNode("ab");
			parentEl = el;

		slider.parentEl = el;

		img.className = el.id + "img";

		buttonPre.textContent  = "Pre";

		buttonNext.textContent = "Next";

		buttonPre.addEventListener("click", slider.movePre.bind(slider), false);
		buttonNext.addEventListener("click", slider.moveNext.bind(slider), false);

		divButton.appendChild(buttonPre);
		divButton.appendChild(buttonNext);

		label.className = "lab";

		divWrapper.appendChild(img);
		divWrapper.appendChild(label);
		divWrapper.appendChild(divButton);

		parentEl.appendChild(divWrapper);

		slider.imgRef = img;

		slider.makeReq(url);

	};


	// Initiate Slider
	initSlideShow(document.getElementById("cat"), "configCat.json");

})(document);


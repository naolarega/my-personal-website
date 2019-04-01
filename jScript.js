var imgs=[
	"images/image1.jpg",
	"images/image2.jpg",
	"images/image3.jpg",
	"images/image4.jpg",
	"images/image5.jpg",
	"images/image6.jpg",];

function glow(arg){
	var link=[
		documnet.getElementById("aboutLink"),
		documnet.getElementById("photoLink"),
		documnet.getElementById("homeLink"),
		documnet.getElementById("videoLink"),
		documnet.getElementById("contactLink")];
	if(arg==1){
		link[1].style.color="yellow";
	}
}
function imgswt(pos){
	var temp;
	var temp2;
	var mn=document.getElementById("imageView");
	var prv=document.getElementById("previmg");
	var nxt=document.getElementById("nextimg");
	if(pos=="next"){
		for(var i=0;i<parseInt(imgs.length)-1;i=i+1){
			if(i==0){
				temp=imgs[i+1];
				imgs[i+1]=imgs[i];
			}
			else if(i==parseInt(imgs.length)-2){
				if(i%2==0){
					imgs[0]=imgs[i+1];
					imgs[i+1]=temp2;
				}
				else{
					imgs[0]=imgs[i+1];
					imgs[i+1]=temp;
				}
			}
			else{
				if(i%2==0){
					temp=imgs[i+1];
					imgs[i+1]=temp2;
				}
				else{
					temp2=imgs[i+1];
					imgs[i+1]=temp;
				}
			}
		}
		prv.src=imgs[0];
		mn.src=imgs[1];
		nxt.src=imgs[2];
	}
	else if(pos=="prev"){
		for(var i=parseInt(imgs.length)-1;i>0;i=i-1){
			if(i==parseInt(imgs.length)-1){
				temp=imgs[i-1];
				imgs[i-1]=imgs[i];
			}
			else if(i==1){
				if(parseInt(imgs.length)%2==0){
					imgs[parseInt(imgs.length)-1]=imgs[i-1];
					imgs[i-1]=temp2;
				}
				else{
					imgs[parseInt(imgs.length)-1]=imgs[i-1];
					imgs[i-1]=temp;
				}
			}
			else{
				if(i%2==0){
					temp2=imgs[i-1];
					imgs[i-1]=temp;
				}
				else{
					temp=imgs[i-1];
					imgs[i-1]=temp2;
				}
			}
		}
		prv.src=imgs[0];
		mn.src=imgs[1];
		nxt.src=imgs[2];
	}
}
function play(w){
	var view=document.getElementById("mainVideo");
	var thumb=[
		document.getElementById("th1"),
		document.getElementById("th2"),
		document.getElementById("th3"),
		document.getElementById("th4")];
	if(w==1){
		view.src="videos/video1.mp4";
		view.play();
	}
	else if(w==2){
		view.src="videos/video2.mp4";
		view.play();
	}
	else if(w==3){
		view.src="videos/video3.mp4";
		view.play();
	}
	else if(w==4){
		view.src="videos/video4.mp4";
		view.play();
	}
}
function add(arg){
	if(arg=="fb"){
		open("http://facebook.com/naol_arega");
	}
	else if(arg=="twt"){
		open("http://twiter.com/naol_arega");
	}
	else if(arg=="ins"){
		open("http://instagram.com/naol_arega");
	}
	else if(arg=="yt"){
		open("http://youtube.com/naol_arega");
	}
}
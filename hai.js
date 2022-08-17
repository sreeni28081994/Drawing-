var cnv=document.getElementById("canvas")
var cnt=cnv.getContext("2d")


cnt.fillStyle="white"
cnt.fillRect(0,0,1498,610)


var painting=true


cnv.addEventListener("mouseenter",function(){
    painting=false
    
})

cnv.addEventListener("mousedown",function(){
    painting=true
    
})

cnv.addEventListener("mouseup",function(){
    painting=false
    cnt.beginPath()
})
cnv.addEventListener("mousemove",draw)


     function draw(e){


    if (painting==false){
        return
    }

    var font=document.getElementById("number").value
    var color=document.getElementById("color").value



    var x= e.clientX-cnv.offsetLeft
    var y=e.clientY-cnv.offsetTop


    cnt.lineTo(x,y)
    cnt.lineWidth=font
    cnt.lineCap="round"
    cnt.strokeStyle=color
    cnt.stroke()

    

}


    
    

    


    











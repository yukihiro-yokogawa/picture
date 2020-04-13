info = document.getElementsByName("info")
var sheet = false
var page = false

document.body.addEventListener("click",function(event){
    if(event.target.id === "create"){
        if(!isNaN(info[0].value) && info[0].value){
            if(Number(info[0].value) >= 2 && 4 >= Number(info[0].value)){
                sheet = true
                if(document.getElementById("error_sheet") !== null){
                    document.getElementById("error_sheet").remove()
                }
            }else{
                console.log("2以上4以下の半角数字を入力してください")
                create("sheet")
            }
        }else{
            create("sheet")
        }

        if(!isNaN(info[1].value) && info[1].value){
            if(Number(info[1].value) >= 1 && 100 >= Number(info[1].value)){
                page = true
                if(document.getElementById("error_page") !== null){
                    document.getElementById("error_page").remove()
                }
            }else{
                console.log("1以上100以下の半角数字を入力してください")
                create("page")
            }
        }else{
            create("page")
        }
        if(sheet === true && page === true){
            document.getElementById("album_creator").style.display = "none"
            create_album(Number(info[0].value),Number(info[1].value))
            console.log(Number(info[0].value))
            console.log(Number(info[1].value))
        }
    }
})

function create(error){
    if(error === "sheet" &&(document.getElementById("error_sheet") === undefined || document.getElementById("error_sheet") === null)){
        info[0].insertAdjacentHTML("beforebegin","<div id=error_sheet><label style='color:red'>2以上4以下の半角数字を入力してください</label></div>")
    }else if(error === "page" &&(document.getElementById("error_page") === undefined || document.getElementById("error_page") === null)){
        info[1].insertAdjacentHTML("beforebegin","<div id=error_page><label style='color:red'>1以上100以下の半角数字を入力してください</label></div>")
    }
}

function create_album(sheet_val,page_val){
    var h = "<div id='album'></div>"
    document.body.insertAdjacentHTML("beforeend",h)
    for(var i=0;i <= page_val-1;i++){
        console.log(i)
        for(var j=0;j <= sheet_val-1;j++){
            console.log(j)
            var h_input = "<img src='#' alt='' id='preview_page[" + i + "].sheet["+ j +"]' class='picture_preview'><input type='file' class='picture_uploder' name='page[" + i + "].sheet["+ j +"]' data-page="+i+" data-sheet="+j+"><br>"
            document.getElementById("album").insertAdjacentHTML("beforeend",h_input)
            console.log(document.getElementById)
        }
    }
}

document.body.addEventListener("change",function(event){
    console.log(event)
    if(event.target.type == "file" && (event.target.files != null || event.target.files != undefined) && event.target.files.length >0){
        console.log(event)
        var file = event.target.files[0]
        var reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = function(){
            readImage(reader,event.target)
        }
    }
    function readImage(reader,picture_data){
        var result_DataURL = reader.result
        var preview_page_num = picture_data.getAttribute("data-page")
        var preview_sheet_num = picture_data.getAttribute("data-sheet")
        console.log(preview_page_num)
        console.log(preview_sheet_num)
        var img = document.getElementById("preview_page[" +preview_page_num  + "].sheet["+ preview_sheet_num +"]")
        var src = document.createAttribute('src')
        src.value = result_DataURL
        console.log(img)
        img.setAttributeNode(src)
    }
})
const viewProject = document.querySelectorAll('.viewProject')
const imageDesign = document.querySelectorAll('.imgDesign')
const viewCode = document.querySelectorAll('.viewCode')


for(let i =0;i<6;i++){
    afficherLiens(i)
}
    



function afficherLiens(index){
    
    imageDesign[index].addEventListener('mouseleave',()=>{
        imageDesign[index].style.opacity = '100%'
        viewProject[index].style.zIndex = '0'
        viewCode[index].style.zIndex = '0'
    })

    viewProject[index].addEventListener('mouseenter',()=>{
        imageDesign[index].style.opacity = '50%';
        viewProject[index].style.zIndex = '1'
        viewCode[index].style.zIndex='1'
    })

    viewCode[index].addEventListener('mouseenter',()=>{
        imageDesign[index].style.opacity = '50%';
        viewProject[index].style.zIndex = '1'
        viewCode[index].style.zIndex='1'
    })

    imageDesign[index].addEventListener('mouseenter',()=>{
        imageDesign[index].style.opacity = '50%';
        viewProject[index].style.zIndex = '1'
        viewCode[index].style.zIndex = '1'
    
    })
}






const Name = document.querySelector("#name")
const email = document.querySelector("#email")
const message = document.querySelector("#message")
const send = document.querySelector("#send")
const errorName = document.querySelector("#errorName")
const errorMail = document.querySelector("#errorMail")

Name.addEventListener('keyup',()=>{verifierFormulaire(Name)})
email.addEventListener('keyup',()=>{verifierFormulaireEmail(email)})

if(Name.value.length === 0){
    Name.style.borderBottom = 'solid red 1px'
    errorName.textContent="le nom est trop petit"
}
if(email.value.length === 0){
    email.style.borderBottom = 'solid red 1px'
    errorMail.textContent = "le mail est trop petit"
}
function verifierFormulaire(index){
        let r = index.value.split("")
        let f = r.filter((word) => word == ' ').join('')
        if( f !==' ' ||r[0] === ' ' || r[r.length-1] == ' '){
            index.style.borderBottom = 'solid red 1px'
            send.disabled = true
            errorName.textContent = "le nom n'est pas valide"
        }
        else if(r.length < 4){
            index.style.borderBottom = 'solid red 1px'
            send.disabled = true
            errorName.textContent="le nom est trop petit"
        }
    
        else{
            index.style.borderBottom = 'solid green 1px'
            send.disabled = false
            errorName.textContent = ""
        }
    }


    function verifierFormulaireEmail(index){
        let r = index.value.split("")
        console.log(r)
        let f = r.filter((word) => word == '@').join('')
        let e = r.filter((word)=> word === '1').join('')
        console.log(e)
        if( f !=='@'||r[0] === ' ' || r[r.length-1] == '@'||r[0] === '@' ||r[1] === '@' ||r[2] === '@'||r[4] === '.'||r[5] === '.'||r[6] === '.'){
            index.style.borderBottom = 'solid red 1px'
            send.disabled = true
            errorMail.textContent = "le mail n'est pas valide"
        }
        else if(r.length < 7){
            index.style.borderBottom = 'solid red 1px'
            send.disabled = true
            errorMail.textContent = "le mail est trop petit"
        }
    
        else{
            index.style.borderBottom = 'solid green 1px'
            send.disabled = false
            errorMail.textContent = ""
        }
    }
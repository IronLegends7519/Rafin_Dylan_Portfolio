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
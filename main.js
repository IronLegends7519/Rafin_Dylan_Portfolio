const test = document.querySelectorAll('.viewProject')
const test2 = document.querySelectorAll('.imgDesign')
const test3 = document.querySelectorAll('.viewCode')


for(let i =0;i<6;i++){
    frere(i)
}
    



function frere(index){
    test2[index].addEventListener('mouseleave',()=>{
        test2[index].style.opacity = '100%'
        test[index].style.zIndex = '0'
        test3[index].style.zIndex = '0'
    })
    test[index].addEventListener('mouseenter',()=>{
        test2[index].style.opacity = '50%';
        test[index].style.zIndex = '1'
        test3[index].style.zIndex='1'
    })
    test3[index].addEventListener('mouseenter',()=>{
        test2[index].style.opacity = '50%';
        test[index].style.zIndex = '1'
        test3[index].style.zIndex='1'
    })
    test2[index].addEventListener('mouseenter',()=>{
        test2[index].style.opacity = '50%';
        test[index].style.zIndex = '1'
        test3[index].style.zIndex = '1'
    
    })
}
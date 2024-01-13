
document.getElementById('btn').addEventListener('click',fun);

function fun() {
    const userWeight = document.getElementById("weight").value ;
    console.log(userWeight);

    // 1 kg === 2.202 pounds

    if(userWeight===NaN || userWeight <=0 || userWeight==="" ){
        
    }
    const pounds = userWeight*2.20462262185;

    document.getElementById('pound').innerText = pounds.toFixed(3) ;
    
}


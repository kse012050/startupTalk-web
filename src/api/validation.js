const formetMap = {
    numb(value) {
        const regex = /^[0-9]+$/;
        return {
            is: regex.test(value),
            value: value.replace(/\D/g, '')
        };
    }
};

export function isFormet(type, value){
    return Object.keys(formetMap).includes(type) && formetMap[type](value);
}

export const inputChange = (e, setInputs) => {
    console.log(11);
    const { value, name, checked, type, dataset: { formet } } = e.target;

    if(formet && !!value && !isFormet(formet, value)['is']){
        const cur = e.target.selectionStart - 1;
        e.target.value = isFormet(formet, value)['value'];
        e.target.setSelectionRange(cur, cur);
    }
    
    if(type === 'checkbox'){
        setInputs((prev)=> ({...prev, [name]: checked ? 'y': 'n'}))
    }else{
        setInputs((prev)=> ({...prev, [name]: e.target.value}))
    }
}

export const requiredList = (setInputs) => {
    setInputs(()=>{
        const obj = {}
        document.querySelectorAll('[required]').forEach(function(e){
            console.log(e.name);
            obj[e.name] = '';
        })
        return obj
    })
}

// 숫자 ',' 찍기
export function addCommas(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
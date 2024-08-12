
const personas = [['Juan', 23], ['Pedro', 45], ['Maria', 34]];
const [f2_para_cambiar_nombre, edad] = personas[0];
const [juancho,pedrinchi,mary] = personas;

console.log(juancho, pedrinchi, mary);

// Output: Juan 23 Pedro 45 Maria 34

const retornoArreglo = () => {
    return ['ABC', 123];
}

const [letras,numeros] = retornoArreglo();
console.log(letras, numeros);


const useState = (nombre) =>{
    return [nombre, () => {
        console.log(`Nuevo nombre ${nombre}`);
    }]     
    
}   
const [nombre,setNombre] = useState('camilo')
console.log(oooooooo );
setNombre();

const arr = useState('knekro');
arr[1]();

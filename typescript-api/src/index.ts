//npm install -D typescript @types/express @types/morgan @types/mongoose @types/cors @types/node ts-node-dev
// npx tsc --init
import app from './app'
import './data/database'

app.listen(3000,()=>{
    console.log('Port running 3000')
})
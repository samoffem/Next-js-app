import {useRouter} from 'next/router'

export const getStaticProps = async ()=>{
    return {
        props:{
            num: Math.random()
        }
    }
}

export const getStaticPaths = async ()=>{
    return {
        paths: [{params: {name: "hello"}}],
        fallback: true
    }
}
const Dynamic = (props) => {
    const router = useRouter()
    if (router.isFallback){
        return<h1>Loading</h1>
    }
    return (
        <div>
           {props.num} 
        </div>
    )
}

export default Dynamic


import React from 'react';
import './App.css';

const API="https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
class App extends React.Component{
  state={
        input:[{}],
        index:0,
        color:'#16a085'
    }

    componentDidMount(){
        fetch(API).then(res=>res.json())
        .then(res=>{
            this.setState({
                input:res.quotes
            })
        })
        
    }
    
    generateRandomNum=()=>{
        var colors = ['#16a085','#27ae60','#2c3e50','#f39c12','#e74c3c','#9b59b6','#FB6964','#342224','#472E32','#BDBB99','#77B1A9','#73A857'];
        const {input}=this.state
        const randomCol=Math.floor(Math.random()*colors.length)
        if(input.length>0){
            const randomInd=Math.floor(Math.random()*input.length)
        this.setState({
            index:randomInd,
            color:colors[randomCol]

    })
}
}
    render(){
     const {input,index,color}=this.state
     const random=input[index]
     const tweetURL=`https://twitter.com/intent/tweet?text=${random.quote} -${random.author}`
    document.querySelector("body").style.backgroundColor=color
        return(
            <div className="wrapper d-flex align-items-center justify-content-center">
                <div className="text-center rounded col-6 p-4 bg-white">
                <div>
                    {input.length>0 && 
                <div>
                  <strong id="text"><i className="fas fa-quote-left fa-2x"></i>{random.quote}</strong>
                    <cite>-{random.author}</cite>
                </div>}
                </div>
                <div className="d-flex flex-row align-items-center justify-content-between">
                <a href={tweetURL} rel="noreferrer" target="_blank" className="btn btn-primary" style={{backgroundColor:color}}><i className="fab fa-twitter"></i> Tweet</a>
                <button className="btn btn-primary" onClick={this.generateRandomNum} style={{backgroundColor:color}}><i className="fas fa-random"></i>New Quote</button>
                </div>
                </div>
                </div>
         
        )
    }
}

export default App;

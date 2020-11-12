import React, {Component} from "react"


class stock extends Component {
	constructor() {
		super()
		this.state ={
			value:"",
			openText:"",
			closeText:"",
			highText:"",
			lowText:"",
			
		}
		this.handleChange = this.handleChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
		
	}
	/*componentDidMount() {
		fetch("https://jsonmock.hackerrank.com/api/stocks?date=5-january-2000")
		.then(response => response.json())
		.then(response => {
			/*console.log(response.data[0]["date"])
			console.log(response.data[0]["open"])
			console.log(response.data[0]["high"])
			console.log(response.data[0]["low"])
			console.log(response.data[0]["close"])
			
		})
	}*/
	
	handleChange(event) {
		
		this.state=({value: event.target.value});	
		
	}
	
	handleSubmit(event) {
		event.preventDefault()
		console.log(this.state.value)
		let val = this.state.value
		const url = "https://jsonmock.hackerrank.com/api/stocks?date="
		fetch(url+val)
		.then(response => response.json())
		.then(response => {
			console.log(response)
			if(response.data[0] != undefined){
				
			
		 this.setState({
          openText: response.data[0]["open"],
		  highText: response.data[0]["high"],
		  lowText: response.data[0]["low"],
		  closeText: response.data[0]["close"]
        });
			} else
				alert("This date is not defined")
			
			
		})
	}
	
	render() {
		return(
		<div>
			<form onSubmit ={this.handleSubmit} >
				<input
					type="text"
					name="date"
					placeholder="date"
					onChange= {this.handleChange}
				/>
				
				<input
					type="text"
					name="open"
					placeholder="open"
					value = {this.state.openText}
					onChange= {this.handleChange}
				/>
				
				<input
					type="text"
					name="high"
					placeholder="high"
					value = {this.state.highText}
					
				/>
				
				<input
					type="text"
					name="low"
					placeholder="low"
					value = {this.state.lowText}
					
				/>
				
				<input
					type="text"
					name="close"
					placeholder="close"
					value = {this.state.closeText}
					onChange= {this.handleChange}
				/>
				
				<button>Search</button>
				
				
			</form>
			
		</div>
		)
	}
}

export default stock
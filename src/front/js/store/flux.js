const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			
		},
		actions: {
			// Use getActions to call a function within a fuction
			
			register:async(name,lastName,email,password)=>{
				try {
					const response = await fetch("https://potential-potato-vx4qqwp5xxr3wwxj-3001.app.github.dev/api/register",{
						method:"POST",
						headers:{"Content-Type":"application/json"},
						body:JSON.stringify({
							name:name,
							last_name:lastName,
							email:email,
							password:password,
						})
					})
					const data = await response.json()
					console.log(data)
					
				} catch (error) {
					console.log(error)
				}
			}
			
			
		}
	};
};

export default getState;

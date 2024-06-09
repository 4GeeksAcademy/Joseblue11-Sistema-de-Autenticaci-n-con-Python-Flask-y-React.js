const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			user:{}
		},
		actions: {
			// Use getActions to call a function within a fuction
			
			register:async(name,lastName,email,password)=>{
				try {
					const response = await fetch("https://expert-carnival-6j644wv7vpgfr56r-3001.app.github.dev/api/register",{
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
					if(!response.ok){
						throw new Error("Error al Registrarte")
					} 
					console.log(data)
					return true
				} catch (error) {
					alert(error)
				}
			},
			

			login:async(email,password)=>{
				try {
					const response = await fetch("https://expert-carnival-6j644wv7vpgfr56r-3001.app.github.dev/api/login",{
						method:"POST",
						headers:{"Content-Type":"application/json"},
						body:JSON.stringify({
							email:email,
							password:password,
						})
					})
					const data = await response.json()
					if(!response.ok){
						throw new Error("Error al hacer Login")
					} 
					localStorage.setItem("token",data.access_token )
					console.log(data)
					setStore({user:data.user})
					return true
				} catch (error) {
					alert(error)
				}
			},
			logout:()=> {
				let store= getStore()
				setStore({...store,user:{}})
			}
			
		}
	};
};

export default getState;

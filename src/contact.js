
// import react, { ChangeEvent, FormEvent, useState } from "react";
// import axios from "axios";
// import ReCaPTCHA from 'react-google-recaptcha';


// //TÄMÄ ON CAMILLAN ASKARTELUA: NÄMÄ TULISI APP.JS ään...

// type FormState = {
//   email: String;
//   name: String;
//   message: String;
// };

// type ServiceMessage = {
//   class: String;
//   text: String;
// }

// function App () {
  
//   const formId = 'LHeIkTHg';
//   const formSparkUrl = `https://submit-form.com/${formId}`;

//   const initialFormState = {
//     email: '',
//     name: '',
//     message: '',
//   };

//   const [formState, setFormState] = useState<FormState>(initialFormState); ///puuttuuko jotain tästä?
//   const [submitting, setSubmitting] = useState<boolean>(false);
//   const [message, setMessage,] = useState<ServiceMessage>();

//   const submitForm = async (event: FormEvent) => {
//     event.preventDefault();
//     setSubmitting(true);
//     await postSubmission();
//     setSubmitting(false);
//   };

//   const postSubmission = async () => {
//     const payload = {
//       ...formState
//     };

//     try {
//       const result = await axios.post(formSparkUrl, payload);
//       console.log(result);
//       setMessage({
//         class: 'bg-green-500',
//         text: 'Thanks, someone will be in touch shortly.',
//       });
//     } catch(error) {
//       console.log(error);
//       setMessage({
//         class: 'bg-red-500',
//         text: 'Sorry, there was a problem. Please try again.',
//       });
//     }

//   };

//   const updateFormControl = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { id, value } = event.target;
//     const formKey = id as keyof FormState;
//     const updatedFormState = { ...formState };
//     updatedFormState[formKey] = value;
//     setFormState(updatedFormState);
//   };


//   return (
//     <div className="h-full flex justify-center flex-col">
//       <div className="w-2/3 m-auto p-8 shadow-lg">
//         <h1 className='text-4xl font-bold flex items-center'>
//           <svg
//             xmlns='http://www.w3.org/2000/svg'
//             className='h-12 transform rotate-45 w-5'
//             viewBox='0 0 20 20'
//             fill='currentColor'
//           >
//             <path d='M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z' />
//           </svg>
//           <span>Ota yhteyttä</span>
//         </h1>
//         {message && ( 
//         <div className={`my-4 text-white w-full p-4${message.class}`}>
//           {message.text}
//           </div>
//           )}
//         <form className="flex flex-col" onSubmit={submitForm}>
//           <div className="my-2 flex flex-col">
//             <label htmlFor="name">Name</label>
//             <input 
//             onChange={updateFormControl}
//             type="text" className="border-2 p-2" 
//             id="name" 
//             value={formState.name}
//             />
//           </div>

//           <div className="my-2 flex flex-col">
//             <label htmlFor="email">email</label>
//             <input 
//             onChange={updateFormControl}
//             type="text" className="border-2 p-2" 
//             id="email" 
//             value={formState.email}
//             />
//           </div>

          
//           <div className="my-2 flex flex-col">
//             <label htmlFor="name">Name</label>
//             <textarea id="message" className="border-2 p-2" onChange={updateFormControl} value={formState.message}>
//             </textarea>
//           </div>


//           <button disabled={submitting} className="my-2 bg-blue-700 text-white w-full p-2 hover-blue-900 duration-200">
//             {submitting ? "Submitting..." : "Submit" }
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }
// export default App


import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <div>
      <div class='bg-white overflow-hidden flex items-center justify-center p-5 flex-col'>
        <div class="w-10/12 gap-y-4 pb-10 flex flex-row" style={{ borderBottomColor: "lightgray", borderBottomWidth: 1, borderBottomStyle: "solid" }}>

          <div class="sm:w-1/4 text-center md:text-left h-auto sm:mt-0 mt-8 ">
            <div class="text-grayLight font-light mb-5">POWWOW</div>
            <ul class="list-reset leading-normal">

              <p className="pr-6">powwow specializes in personalized gifts, customizable tumblers, t-shirts , and party supplies.</p>
            </ul>



          </div>
          <div class="sm:w-1/4 h-auto text-center md:text-left sm:mt-0 mt-8">
            <div class="text-grayLight mb-5 font-light">SHOP</div>
            <ul class="list-reset leading-normal">
              <li class="hover:text-green-dark text-grayLight  hover:text-secondary"><Link href='/'>Our story</Link></li>
              <li class="hover:text-green-dark text-grayLight  hover:text-secondary"><Link href='/'>Careers</Link></li>
              <li class="hover:text-green-dark text-grayLight hover:text-secondary"><Link href='/'>Privacy policy</Link></li>
              <li class="hover:text-green-dark text-grayLight hover:text-secondary"><Link href='/'>Terms of use</Link></li>
            </ul>
          </div>

          <div class="sm:w-1/4 h-auto text-center md:text-left sm:mt-0 mt-8">
            <div class="text-grayLight mb-5 font-light">HELP</div>
            <ul class="list-reset leading-normal">
              <li class="hover:text-green-dark text-grayLight hover:text-secondary"><Link href='/'>Contact us</Link></li>
              <li class="hover:text-green-dark text-grayLight hover:text-secondary"><Link href='/'>FAQs</Link></li>
              <li class="hover:text-green-dark text-grayLight hover:text-secondary"><Link href='/'>Pricing</Link></li>
            </ul>

          </div>
          <div class="sm:w-1/4 h-auto text-center md:text-left sm:mt-0 mt-8">
            <div class="text-grayLight mb-5 font-light">COMPANY</div>
            <ul class="list-reset leading-normal">
              <li class="hover:text-green-dark font-extralight text-grayLight hover:text-secondary"><Link href='/'>Contact us</Link></li>
              <li class="hover:text-green-dark text-grayLight hover:text-secondary"><Link href='/'>FAQs</Link></li>
              <li class="hover:text-green-dark text-grayLight hover:text-secondary"><Link href='/'>Pricing</Link></li>
            </ul>

          </div>


        </div>
      </div>
      <div class="w-10/12 bg-white pb-10 justify-between flex flex-row pt-6">
        <p> &copy;2021 POWWOW</p>
        <div className="flex flex-row justify-between">
          <svg xmlns="http://www.w3.org/2000/svg" link="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" width="2.43em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 512 211"><path d="M93.552 27.103c-6 7.1-15.602 12.702-25.203 11.901c-1.2-9.6 3.5-19.802 9.001-26.103C83.35 5.601 93.852.4 102.353 0c1 10.001-2.9 19.802-8.8 27.103zm8.701 13.802c-13.902-.8-25.803 7.9-32.404 7.9c-6.7 0-16.802-7.5-27.803-7.3c-14.301.2-27.603 8.3-34.904 21.202c-15.002 25.803-3.9 64.008 10.601 85.01c7.101 10.401 15.602 21.802 26.803 21.402c10.602-.4 14.802-6.9 27.604-6.9c12.901 0 16.602 6.9 27.803 6.7c11.601-.2 18.902-10.4 26.003-20.802c8.1-11.801 11.401-23.303 11.601-23.903c-.2-.2-22.402-8.7-22.602-34.304c-.2-21.402 17.502-31.603 18.302-32.203c-10.002-14.802-25.603-16.402-31.004-16.802zm80.31-29.004V167.82h24.202v-53.306h33.504c30.603 0 52.106-21.002 52.106-51.406c0-30.403-21.103-51.206-51.306-51.206h-58.507zm24.202 20.403h27.903c21.003 0 33.004 11.201 33.004 30.903c0 19.702-12.001 31.004-33.104 31.004h-27.803V32.304zM336.58 169.019c15.202 0 29.303-7.7 35.704-19.902h.5v18.702h22.403V90.21c0-22.502-18.002-37.004-45.706-37.004c-25.703 0-44.705 14.702-45.405 34.904h21.803c1.8-9.601 10.7-15.902 22.902-15.902c14.802 0 23.103 6.901 23.103 19.603v8.6l-30.204 1.8c-28.103 1.7-43.304 13.202-43.304 33.205c0 20.202 15.701 33.603 38.204 33.603zm6.5-18.502c-12.9 0-21.102-6.2-21.102-15.702c0-9.8 7.901-15.501 23.003-16.401l26.903-1.7v8.8c0 14.602-12.401 25.003-28.803 25.003zm82.01 59.707c23.603 0 34.704-9 44.405-36.304L512 54.706h-24.603l-28.503 92.11h-.5l-28.503-92.11h-25.303l41.004 113.513l-2.2 6.901c-3.7 11.701-9.701 16.202-20.402 16.202c-1.9 0-5.6-.2-7.101-.4v18.702c1.4.4 7.4.6 9.201.6z" fill="#000" /></svg>
          <svg className="ml-2" xmlns="http://www.w3.org/2000/svg" link="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" width="1.29em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 199"><path fill="#2271CE" d="M162.614 141.315H93.392V16.913h69.222z" /><path d="M97.783 79.117c0-25.236 11.815-47.715 30.215-62.201C114.543 6.323 97.562 0 79.107 0C35.417 0 0 35.421 0 79.117c0 43.695 35.416 79.116 79.107 79.116c18.455 0 35.436-6.322 48.891-16.916c-18.4-14.486-30.215-36.965-30.215-62.2" fill="#005EB6" /><path d="M256 79.117c0 43.695-35.416 79.116-79.107 79.116c-18.455 0-35.436-6.322-48.891-16.916c18.4-14.486 30.215-36.965 30.215-62.2c0-25.236-11.815-47.715-30.215-62.201C141.457 6.323 158.438 0 176.893 0C220.583 0 256 35.421 256 79.117" fill="#0099DF" /><path d="M181.7 178.644c-2.197-1.448-5.23-2.198-8.565-2.198c-5.322 0-8.747 2.55-8.747 6.725c0 3.426 2.55 5.533 7.248 6.197l2.158.307c2.5.352 3.687 1.01 3.687 2.193c0 1.63-1.67 2.55-4.789 2.55c-3.164 0-5.447-1.01-6.987-2.198l-2.152 3.561c2.505 1.846 5.668 2.727 9.094 2.727c6.066 0 9.582-2.857 9.582-6.856c0-3.692-2.767-5.624-7.339-6.288l-2.153-.307c-1.976-.261-3.56-.659-3.56-2.062c0-1.54 1.493-2.46 3.998-2.46c2.681 0 5.276 1.011 6.549 1.801l1.977-3.692zm-107.923 8.832c0 6.373 4.436 11.03 11.206 11.03c3.164 0 5.272-.704 7.556-2.504l-2.199-3.692c-1.71 1.232-3.51 1.89-5.492 1.89c-3.647-.044-6.323-2.68-6.323-6.724c0-4.044 2.676-6.68 6.323-6.725c1.981 0 3.782.659 5.492 1.891l2.199-3.692c-2.284-1.8-4.392-2.505-7.556-2.505c-6.77 0-11.206 4.658-11.206 11.03zm44.054-11.03c-2.635 0-4.35 1.233-5.538 3.079v-2.55h-4.522v21.005h4.568V186.2c0-3.471 1.493-5.403 4.481-5.403c.926 0 1.892.131 2.857.529l1.404-4.306c-1.006-.397-2.33-.573-3.25-.573zm16.973 0c-2.636 0-4.351 1.233-5.538 3.079v-2.55h-4.522v21.005h4.567V186.2c0-3.471 1.494-5.403 4.482-5.403c.925 0 1.89.131 2.857.529l1.403-4.306c-1.006-.397-2.329-.573-3.25-.573zm-32.02 21.524h-4.597v-20.975h4.597v20.975zm-2.323-31.457c.452 0 .875.08 1.272.251c.394.166.734.398 1.026.69c.29.291.523.633.69 1.026c.172.397.249.82.249 1.272c0 .453-.08.875-.25 1.268a3.075 3.075 0 0 1-1.715 1.685c-.398.16-.82.241-1.272.241c-.453 0-.876-.08-1.268-.241a3.004 3.004 0 0 1-1.021-.664a3.089 3.089 0 0 1-.664-1.021a3.307 3.307 0 0 1-.242-1.268c0-.453.08-.875.242-1.272a3.22 3.22 0 0 1 .664-1.027a3.064 3.064 0 0 1 1.021-.689a3.141 3.141 0 0 1 1.268-.251zm60.261 22.57c0 1.665-.276 3.094-.82 4.291c-.548 1.197-1.267 2.173-2.163 2.932a8.644 8.644 0 0 1-3.068 1.675a11.959 11.959 0 0 1-7.092 0a8.71 8.71 0 0 1-3.084-1.675c-.9-.76-1.62-1.735-2.162-2.932c-.539-1.197-.81-2.626-.81-4.29v-12.088h4.542v11.67c0 1.006.13 1.866.387 2.575c.262.704.619 1.278 1.071 1.715c.453.438.991.76 1.61.956a6.555 6.555 0 0 0 1.992.297c.704 0 1.368-.1 1.987-.297a4.05 4.05 0 0 0 1.61-.956c.457-.437.81-1.01 1.07-1.715c.262-.709.388-1.57.388-2.575v-11.67h4.542v12.087z" fill="#231F20" /></svg>

          <svg role="img" viewBox="0 0 24 24" width="2.43em" height="1em" xmlns="http://www.w3.org/2000/svg"><title>Visa</title><path d="M9.112 8.262L5.97 15.758H3.92L2.374 9.775c-.094-.368-.175-.503-.461-.658C1.447 8.864.677 8.627 0 8.479l.046-.217h3.3a.904.904 0 01.894.764l.817 4.338 2.018-5.102zm8.033 5.049c.008-1.979-2.736-2.088-2.717-2.972.006-.269.262-.555.822-.628a3.66 3.66 0 011.913.336l.34-1.59a5.207 5.207 0 00-1.814-.333c-1.917 0-3.266 1.02-3.278 2.479-.012 1.079.963 1.68 1.698 2.04.756.367 1.01.603 1.006.931-.005.504-.602.725-1.16.734-.975.015-1.54-.263-1.992-.473l-.351 1.642c.453.208 1.289.39 2.156.398 2.037 0 3.37-1.006 3.377-2.564m5.061 2.447H24l-1.565-7.496h-1.656a.883.883 0 00-.826.55l-2.909 6.946h2.036l.405-1.12h2.488zm-2.163-2.656l1.02-2.815.588 2.815zm-8.16-4.84l-1.603 7.496H8.34l1.605-7.496z" /></svg>
        </div>
      </div>
    </div>
  )
}

export default Footer

// import swal from 'sweetalert';

// function Footer() {

//   const handleSubscribe = () => {
//     swal("Great!", "Thank you for getting in touch, we will keep you posted.", "success");
//   }

//   return (
//     <>
//       {/* <Head>
//       {/* <link rel="stylesheet" href="https://forms.gosquared.com/forms.css" /> */}
//       {/* </Head> */}
//       <div
//         class=" text-gray-600 px-6 lg:px-8 pb-6 md:pb-12"
//         style={{ backgroundColor: "#dbeafe" }}
//       >
//         <div class="max-w-screen-2xl mx-auto border-b-2 border-gray-200 mb-12 lg:mb-16 py-6 md:py-12 lg:pb-20 flex md:justify-center justify-center md:items-center md:flex-row md:space-x-12 space-y-6 ">
//           <a
//             href="https://app.klinker.com.au/auth/register"
//             class="inline-block bg-gradient-to-br  bg-blue-400 hover:bg-blue-500 font-semibold rounded-lg py-4 px-12 lg:px-12 text-white text-2xl"
//           >
//             Sign Up Now
//           </a>
//         </div>
//         <div className="flex justify-center mt-20 pb-10">
//           <div className=" md:w-6/12 ">
//             <form
//               onSubmit={handleSubscribe}
//               id="gosquared_form"
//               action="https://forms.gosquared.com/post/GSN-660931-Z/33275c33-17e0-4271-9bd7-ff8a32642d8b"
//               method="POST"
//               target="_blank"
//             >
//               <div className="max-w-lg mx-auto flex flex-col border-gray-lighter justify-between align-middle border-blue-400 w-10/12">
//                 <p className="text-gray-500 text-2xl font-semibold text-center">
//                   Get in touch
//                 </p>
//                 <p className="text-gray-500 text-2xl font-semibold text-center">
//                   with us{" "}
//                 </p>

//                 <label className="py-3 px-2 pb-5">
//                   <input
//                     className="py-2 border-b-2 mb-2 focus:outline-none w-full pl-2 bg-transparent border-gray-300"
//                     type="text"
//                     placeholder="Your name here"
//                     name="name"
//                     required
//                   />
//                   <input
//                     className="py-2 border-b-2 w-full focus:outline-none pl-2 bg-transparent border-gray-300"
//                     // style={{ padding: "10px" }}
//                     type="email"
//                     placeholder="someone@example.com"
//                     name="email"
//                     required
//                   />
//                 </label>
//                 <div className="flex justify-center md:mt-5">
//                   {" "}
//                   <input
//                     className=" cursor-pointer md:w-6/12 w-6/12 bg-transparent border-2 border-gray-500 flex items-center justify-center py-3 md:py-4 text-sm font-medium rounded-md text-gray-800 transition duration-500 ease-in-out md:transform hover:-translate-y-1 hover:scale-110"
//                     type="submit"
//                     value="Get in touch"
//                     name="submit"
//                   />
//                 </div>
//                 {/* <label>
//             <p>Email:</p>
//             <input type="email" placeholder="someone@example.com" name="email" required />
//           </label> */}
//                 {/* <div> */}

//                 {/* </div> */}
//               </div>

//               {/* <input style="position:absolute;left:-9999px" aria-hidden="true" name="gs_a56f550c-c753-4add-b4d8-16b9f4f35a9d" tabindex="-1" value="" /> */}
//             </form>
//           </div>
//         </div>

//         <div class="max-w-screen-3xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 mt-16 lg:mt-20">
//           <img class="h-8" src="./brand-logo.png" alt="UptimeMate logo" />
//           <div class="text-sm">
//             &copy;2021 Campbell's Construction Technology Pty Ltd. All rights
//             reserved.
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
// export default Footer;

// {
//   /* <div class="max-w-3xl flex-1 ">
//           <h4 class="text-2xl sm:text-3xl md:text-4xl text-gray-700 font-medium">
//             We believe Klinker proves itself as your best business partner.
//           </h4>
//           <p class="text-base md:text-xl font-medium text-gray-500 mt-4 leading-relaxed">
//             Destined to provide our customer with something valuable and time
//             effective.Klinker offers a seamless experience and communication for
//             its user.
//           </p>
//         </div> */
// }
// {
//   /* <form id="gosquared_form" action="https://forms.gosquared.com/post/GSN-660931-Z/a56f550c-c753-4add-b4d8-16b9f4f35a9d" method="POST" target="_blank">
//         <label>
//           <p>Email:</p>
//           <input type="email" placeholder="someone@example.com" name="email" required />
//         </label>

//         <div>
//           <input type="submit" value="Submit" name="submit" />
//         </div>

//         <input style="position:absolute;left:-9999px" aria-hidden="true" name="gs_a56f550c-c753-4add-b4d8-16b9f4f35a9d" tabindex="-1" value="" />
//         <a href="https://forms.gosquared.com/r/GSN-660931-Z" class="poweredby">Powered by <strong>GoSquared</strong></a>
//       </form> */
// }

// {
//   /* <div class="max-w-screen-2xl mx-auto grid md:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-x-8">
//     <div>
//       <h5 class="text-xl font-semibold text-gray-700">Product</h5>
//       <nav class="mt-4">
//         <ul class="space-y-2">
//           <li>
//             <a href="#" class="font-normal text-base hover:text-gray-400">Landingpages</a>
//           </li>
//           <li>
//             <a href="#" class="font-normal text-base hover:text-gray-400">Features</a>
//           </li>
//           <li>
//             <a href="#" class="font-normal text-base hover:text-gray-400">Documentation</a>
//           </li>
//           <li>
//             <a href="#" class="font-normal text-base hover:text-gray-400">Careers</a>
//           </li>   
//           <li>
//             <a href="#" class="font-normal text-base hover:text-gray-400">Blocks</a>
//           </li>
//         </ul>
//       </nav>
//     </div>
//     <div>
//       <h5 class="text-xl font-semibold text-gray-700">Industries</h5>
//       <nav class="mt-4">
//         <ul class="space-y-2">
//           <li>
//             <a href="#" class="font-normal text-base hover:text-gray-400">Employment</a>
//           </li>
//           <li>
//             <a href="#" class="font-normal text-base hover:text-gray-400">Childcare</a>
//           </li>
//           <li>
//             <a href="#" class="font-normal text-base hover:text-gray-400">Education</a>
//           </li>
//           <li>
//             <a href="#" class="font-normal text-base hover:text-gray-400">Accountancy</a>
//           </li>
//           <li>
//             <a href="#" class="font-normal text-base hover:text-gray-400">Wholesale</a>
//           </li>
//         </ul>
//       </nav>
//     </div>
//     <div>
//       <h5 class="text-xl font-semibold text-gray-700">About us</h5>
//       <nav class="mt-4">
//         <ul class="space-y-2">
//           <li>
//             <a href="#" class="font-normal text-base hover:text-gray-400">Company</a>
//           </li>
//           <li>
//             <a href="#" class="font-normal text-base hover:text-gray-400">Download brochure</a>
//           </li>
//           <li>
//             <a href="#" class="font-normal text-base hover:text-gray-400">Media Kit</a>
//           </li>
//           <li>
//             <a href="#" class="font-normal text-base hover:text-gray-400">Accountancy</a>
//           </li>
//         </ul>
//       </nav>
//     </div>
//     <div>
//       <h5 class="text-xl font-semibold text-gray-700">Legal</h5>
//       <nav class="mt-4">
//         <ul class="space-y-2">
//           <li>
//             <a href="#" class="font-normal text-base hover:text-gray-400">Terms and conditions</a>
//           </li>
//           <li>
//             <a href="#" class="font-normal text-base hover:text-gray-400">Security</a>
//           </li>
//           <li>
//             <a href="#" class="font-normal text-base hover:text-gray-400">Privacy and Cookie Statement</a>
//           </li>
//           <li>
//             <a href="#" class="font-normal text-base hover:text-gray-400">Processor Agreement</a>
//           </li>
//           <li>
//             <a href="#" class="font-normal text-base hover:text-gray-400">Sitemap</a>
//           </li>
//         </ul>
//       </nav>
//     </div>

//     <div>
//       <h5 class="text-xl font-semibold text-gray-700">Contact</h5>
//       <div class="space-y-4 md:space-y-6 mt-4">
//         <div class="flex items-start space-x-4">
//           <div>
//             <svg class="w-6 h-6 mt-1 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
//           </div>
//           <div class="flex-1">
//             <address class="not-italic">
//               Rorikstraat 159<br/>
//               Wijk bij Duurstede<br/>
//               The Netherlands
//             </address>
//           </div>
//         </div>
//         <div class="flex items-start space-x-4">
//           <div>
//             <svg class="w-6 h-6 mt-1 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
//           </div>
//           <div class="flex-1">
//             <a href="#" class="hover:text-gray-500">support@hello.com</a>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div> */
// }

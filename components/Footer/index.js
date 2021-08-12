
import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <div>
      <div class='bg-white overflow-hidden flex items-center justify-center p-5 '>
        <div class="container py-6 ">
          <div class="sm:flex  ">
            <Link href='/'>
              <div class="md:w-3/12  md:h-16 h-24  relative pt-6 cursor-pointer">
                {/* <img className='absolute w-full h-full object-cover md:-mt-10   -ml-5' src='/logo.png' alt='error' ></img> */}
              </div>
            </Link>
            <div class="sm:w-1/4 text-center md:text-left h-auto sm:mt-0 mt-8 ">
              <div class="text-grayLight font-light mb-2">POWWOW</div>
              <ul class="list-reset leading-normal">

                <li class="hover:text-green-dark text-grayLight  hover:text-secondary"><Link href='/blog'>Handy Information</Link></li>
                <li class="hover:text-blue text-grayLight hover:text-secondary"><Link href='/pdfguide'>PDF guide</Link></li>
                <li class="hover:text-green-dark text-grayLight  hover:text-secondary"><Link href='https://blog.notaryport.com/'>Blog</Link></li>
              </ul>



            </div>
            <div class="sm:w-1/4 h-auto text-center md:text-left sm:mt-0 mt-8">
              <div class="text-grayLight mb-2 font-light">SHOP</div>
              <ul class="list-reset leading-normal">
                <li class="hover:text-green-dark text-grayLight  hover:text-secondary"><Link href='/about'>Our story</Link></li>
                <li class="hover:text-green-dark text-grayLight  hover:text-secondary"><Link href='/careers'>Careers</Link></li>
                <li class="hover:text-green-dark text-grayLight hover:text-secondary"><Link href='/privacy'>Privacy policy</Link></li>
                <li class="hover:text-green-dark text-grayLight hover:text-secondary"><Link href='/terms'>Terms of use</Link></li>
              </ul>
            </div>

            <div class="sm:w-1/4 h-auto text-center md:text-left sm:mt-0 mt-8">
              <div class="text-grayLight mb-2 font-light">HELP</div>
              <ul class="list-reset leading-normal">
                <li class="hover:text-green-dark text-grayLight hover:text-secondary"><Link href='/contact'>Contact us</Link></li>
                <li class="hover:text-green-dark text-grayLight hover:text-secondary"><Link href='/faq'>FAQs</Link></li>
                <li class="hover:text-green-dark text-grayLight hover:text-secondary"><Link href='/pricing'>Pricing</Link></li>
              </ul>

            </div>
            <div class="sm:w-1/4 h-auto text-center md:text-left sm:mt-0 mt-8">
              <div class="text-grayLight mb-2 font-light">COMPANY</div>
              <ul class="list-reset leading-normal">
                <li class="hover:text-green-dark text-grayLight hover:text-secondary"><Link href='/contact'>Contact us</Link></li>
                <li class="hover:text-green-dark text-grayLight hover:text-secondary"><Link href='/faq'>FAQs</Link></li>
                <li class="hover:text-green-dark text-grayLight hover:text-secondary"><Link href='/pricing'>Pricing</Link></li>
              </ul>

            </div>


          </div>
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

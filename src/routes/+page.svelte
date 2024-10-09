<!-- src/routes/+page.svelte -->

<script lang="ts">
    import { onMount } from 'svelte';
  
    let winners: string[] = [];
    let showRegistrationForm = false;
  
    onMount(() => {
      // Fetch winners data here if needed
      winners = [
        '11 DE NOVIEMBRE DEL 2024',
        '10 DE DICIEMBRE DEL 2024',
        '10 DE ENERO DEL 2025'
      ];
    });

    function toggleRegistrationForm() {
        showRegistrationForm = !showRegistrationForm;
    }
  </script>
  
  <main class="font-sans mx-auto">
    <header class="bg-liverpool p-3 flex justify-center items-center">
      <img src="/images/liverpool-logo.svg" alt="Liverpool Logo" class="max-w-[200px]" />
    </header>

    <section class="flex justify-center items-center py-4 border-b-2 mb-6">
        <h1 class="text-sm text-center md:text-xl font-medium tracking-wide">SORTEOS, CONCURSOS Y PROMOCIONES <span class="text-[#ce2c95]">LIVERPOOL</span></h1>
    </section>
  
    <section class="relative mb-5 flex flex-col justify-center items-center">
        <div class="w-full md:w-[80%] flex flex-col justify-center items-center">
            <img src="/images/banner.jpg" alt="Oster Equipa tu espacio favorito del hogar" class="w-full hidden md:block" />
            <img src="/images/banner-mobile.jpg" alt="Oster Equipa tu espacio favorito del hogar" class="w-full block md:hidden" />
            <div class="bg-gray-100 flex flex-col md:flex-row justify-between items-center mt-3 py-2 px-8 w-full">
                <p class="text-center mb-2 text-xs md:mb-0 md:ml-20 md:text-base font-medium">Registra tus tickets de compra, participa y podrías ganar </p>
                {#if !showRegistrationForm}
                <button on:click={toggleRegistrationForm} class="text-sm md:text-base bottom-5 right-5 bg-liverpool text-white py-1 px-4 rounded hover:bg-[#c4006b] transition-colors">
                    Registrar un ticket
                </button>
                {:else}
                    <button on:click={toggleRegistrationForm} class="text-sm md:text-base bg-[#e6007e] text-white py-1 px-4 rounded hover:bg-[#c4006b] transition-colors">
                        Regresar
                    </button>
                {/if}
                
            </div>
            <section class="text-center mt-10  w-[80%]">
                <h2 class="text-2xl font-medium mb-5"><span class="text-[#ce2c95]">REGÍSTRATE,</span> GANAR ES MUY FÁCIL</h2>
                <div class="flex flex-col md:flex-row justify-around">
                  <div class="flex flex-col justify-center items-center">
                    <img src="/images/register-icon.svg" alt="Register Icon" class="h-40 mx-auto mb-2" />
                    <div class="bg-gray-100 w-8 h-8 rounded-full flex justify-center items-center mb-2">1</div>
                    <p>Registra tu ticket</p>
                  </div>
                  <div class="flex flex-col justify-center items-center">
                    <img src="/images/participate-icon.svg" alt="Participate Icon" class="h-40 mx-auto mb-2" />
                    <div class="bg-gray-100 w-8 h-8 rounded-full flex justify-center items-center mb-2">2</div>
                    <p>Participa en el desafío</p>
                  </div>
                  <div class="flex flex-col justify-center items-center">
                    <img src="/images/gift-icon.svg" alt="Gift Icon" class="h-40 mx-auto mb-2" />
                    <div class="bg-gray-100 w-8 h-8 rounded-full flex justify-center items-center mb-2">3</div>
                    <p>Ya estás participando</p>
                  </div>
                </div>
              </section>
        </div>
    </section>
  
    {#if showRegistrationForm}
        <section class="mb-10 p-4 md:p-6 rounded-lg shadow-md">
            <img src="/images/second-banner.jpg" alt="Oster Equipa tu espacio favorito del hogar" class="w-full mb-4 hidden md:block" />
            <div class="flex flex-col-reverse md:flex-row gap-6">
                <div class="w-full md:w-[90%] bg-gray-100 p-3 rounded-md">
                    <p class="text-sm md:text-base text-center font-bold">
                        Participa para poder ganar hasta <span class="text-[#e6007e]">$100,000</span> en equipo Oster, calculando
                        el número de pelotas que contiene la urna.
                    </p>
                    <p class="text-sm md:text-base text-center mb-4">
                        Dale play al video y calcula el número de pelotas que contine la urna ¡Mucha Suerte!
                    </p>
                    <form class="grid grid-cols-2 gap-4">
                        <div class="col-span-1">
                            <label for="nombre" class="block text-sm font-medium text-gray-700">Nombre</label>
                            <input type="text" id="nombre" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                        </div>
                        <div class="col-span-1">
                            <label for="apellidoMaterno" class="block text-sm font-medium text-gray-700">Apellido Materno</label>
                            <input type="text" id="apellidoMaterno" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                        </div>
                        <div class="col-span-1">
                            <label for="apellidoPaterno" class="block text-sm font-medium text-gray-700">Apellido Paterno</label>
                            <input type="text" id="apellidoPaterno" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                        </div>
                        <div class="col-span-1">
                            <label for="fechaNacimiento" class="block text-sm font-medium text-gray-700">Fecha de Nacimiento</label>
                            <input type="date" id="fechaNacimiento" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                        </div>
                        <div class="col-span-1">
                            <label for="genero" class="block text-sm font-medium text-gray-700">Género</label>
                            <select id="genero" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                            <option>Seleccionar</option>
                            <option>Masculino</option>
                            <option>Femenino</option>
                            <option>Otro</option>
                            </select>
                        </div>
                        <div class="col-span-1">
                            <label for="telefono" class="block text-sm font-medium text-gray-700">Teléfono Móvil</label>
                            <input type="tel" id="telefono" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                        </div>
                        <div class="col-span-2">
                            <label for="direccion" class="block text-sm font-medium text-gray-700">Dirección, Calle y Número</label>
                            <input type="text" id="direccion" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                        </div>
                        <div class="col-span-1">
                            <label for="colonia" class="block text-sm font-medium text-gray-700">Colonia</label>
                            <input type="text" id="colonia" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                        </div>
                        <div class="col-span-1">
                            <label for="codigoPostal" class="block text-sm font-medium text-gray-700">Código Postal</label>
                            <input type="text" id="codigoPostal" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                        </div>
                        <div class="col-span-2">
                            <label for="localidad" class="block text-sm font-medium text-gray-700">Localidad</label>
                            <input type="text" id="localidad" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                        </div>
                        <div class="col-span-2">
                            <label for="email" class="block text-sm font-medium text-gray-700">Correo Electrónico</label>
                            <input type="email" id="email" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                        </div>
                        <div class="col-span-2 font-bold mt-4">DATOS DEL TICKET DE COMPRA</div>
                        <div class="col-span-1">
                            <label for="folio" class="block text-sm font-medium text-gray-700">Folio</label>
                            <input type="text" id="folio" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                        </div>
                        <div class="col-span-1">
                            <label for="fechaCompra" class="block text-sm font-medium text-gray-700">Fecha</label>
                            <input type="date" id="fechaCompra" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                        </div>
                        <div class="col-span-1">
                            <label for="montoCompra" class="block text-sm font-medium text-gray-700">Monto de Compra</label>
                            <div class="mt-1 relative rounded-md shadow-sm">
                            <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <span class="text-gray-500 sm:text-sm">$</span>
                            </div>
                            <input type="text" id="montoCompra" class="pl-7 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                            </div>
                        </div>
                        <div class="col-span-1">
                            <label for="numeroPelotas" class="block text-sm font-medium text-gray-700">Número de Pelotas dentro de la Urna</label>
                            <input type="number" id="numeroPelotas" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                        </div>
                        <button type="submit" class="col-span-2 bg-[#e6007e] text-white py-2 px-4 rounded hover:bg-[#c4006b] transition-colors">
                            REGISTRAR
                        </button>
                    </form>
                </div>
                <div class="flex flex-col items-center justify-center">
                    <div class="w-64 h-64 bg-gray-300 rounded-full flex items-center justify-center mb-4">
                    <span class="text-6xl">▶️</span>
                    </div>
                    <img src="/images/oster-machine.jpg" alt="Oster Machine" class="max-w-full h-auto" />
                    <p class="text-center mt-2 text-sm">
                    Medida de la Urna es de: 00x00x00 cm
                    Las pelotas tienen una dimensión de 00cm
                    </p>
                </div>
            </div>
        </section>
    {:else}
        <section class="bg-gray-100 p-5 flex flex-col justify-center items-center">
            <h2 class="text-xl md:text-2xl font-bold mb-3">PUBLICACIÓN DE GANADORES</h2>
            <div class="w-[80%] h-1 bg-[#ce2c95] mx-auto mb-5"></div>
            <ul class="mb-5 flex flex-col items-start w-content">
                {#each winners as date}
                    <li>- {date}</li>
                {/each}
            </ul>
            <img src="/images/trophy.svg" alt="Trophy Icon" class="h-[200px] mx-auto" />
        </section>
    {/if}
  
    <footer class="mt-10 text-center text-xs md:text-sm mb-2">
      <a href="#" class="text-[#e6007e] hover:underline">Términos y condiciones</a> | 
      <a href="#" class="text-[#e6007e] hover:underline">Aviso de Privacidad</a>
      <p class="mb-2">©2024 Liverpool | Todos los derechos reservados D.R.®</p>
    </footer>
  </main>
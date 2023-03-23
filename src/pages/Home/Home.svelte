<script context="module">

    export async function load({fetch}){
        const res = await fetch('../../Data/Landing.json')
        const Sections = await res.json();
        

        if (res.ok){
            return {
                props:{
                    Sections
                }
            }
        }
        return {
            status : res.status,
            error : new Error("couldnot fetch data")
        }
    }

</script>

<script lang=ts  >

import Data from "../../Data/Landing.json";

import VData from "../../Data/Videos.json";

import TagButton from '../../components/Buttons/TagButton.svelte'
import TextCard from '../../components/Cards/TextCard.svelte'
import TextContainer from '../../components/Containers/TextContainer.svelte'
import ParallaxSection from '../../components/Sections/ParalaxSection.svelte'
import TagContainer from '../../components/Containers/TagContainer.svelte'
import ContentSection from "../../components/Sections/ContentSection.svelte"
import CardContainer from "../../components/Containers/CardContainer.svelte"
import VideoCard from "../../components/Cards/VideoCard.svelte"

// those virables ar just for demonstration
let Image = `/images/mosque2.png`
let Title= "Title"
let Text = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus exercitationem quaerat, animi consectetur, mollitia quo vel sint cumque eveniet obcaecati voluptatum. Quaerat vel ea voluptatem itaque fuga minima quidem iusto.`
let LongText =`Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est minima voluptas unde officia et esse reiciendis vitae labore commodi voluptates fugiat aperiam, saepe rerum nihil, autem quam alias laudantium obcaecati.
Voluptatibus doloremque ad earum quis quam dolorem accusamus soluta adipisci dolor! Voluptates perferendis repellat temporibus officia odit vitae excepturi maiores beatae qui ducimus. Veniam quae maxime sapiente beatae, magni quis.
Repudiandae minus aliquam quidem quisquam unde at numquam quis ducimus, temporibus sapiente sit obcaecati ipsum veniam pariatur inventore impedit earum maxime sequi tempora culpa quo harum ab quasi. Asperiores, voluptatem.
Quisquam iste cum quo, sequi ullam atque est amet temporibus recusandae quibusdam odio nam, libero magni maxime neque deleniti? Reprehenderit voluptatum quod deserunt ab a suscipit repudiandae modi accusantium rem.
Eum eligendi vitae non ea animi, reiciendis magnam nesciunt voluptatum error numquam fugit sequi fuga ratione obcaecati fugiat inventore sapiente harum dignissimos soluta laborum aliquam. Aut doloremque placeat quod! Doloribus.`

</script>

{#each Data.Sections as Section}
    
    
    {#if Section.Type=="Parallax"}
    <ParallaxSection
     image={Section.Content.Background}
     >
         <!-- this image will move with scroll -->
        {#if Section.Content.Image}
        <!-- content here -->
            <img id="parallax" 
            class="
            relative
            h-[auto]
            w-ladingImage
            tablet:left-thin 
            left-[calc(50%_-_(theme(width.ladingImage)/2))]
            top-landingImage
            border-transparent 
            border-card
            rounded-xl
            transition-[right_,_left,_width] 
            duration-[500ms] 
            overflow-auto 
            " 
            src={Section.Content.Image} alt=""
            >
        {/if}
     
         <!-- card can be placed in the scrtion but position needs to be specified
              it also can move with scroll but this has to be added in the function. 
             cardPhone
         -->
         {#if Section.Content.Title || Section.Content.Message }

         <TextCard 
         id="parallax"
         class="
         absolute
         top-[calc(50%_-_theme(height.parallaxCard)/2)]
         left-[theme(width.ladingImage)]
         transition-[right_,_left,_width] 
         
         desktop:left-[calc(theme(width.readable)]
         desktop:right-thick
         
         max-w-readable 
         max-h-[calc((theme(height.parallaxSection)/2))] 
     
         tablet:right-2xthick 
     
         max-tablet:left-2xthick
         max-tablet:right-2xthick
         ">
             <TextContainer>
                    <h1>{Section.Content.Title}</h1>
                    <p>{Section.Content.Message}</p>
                     <!-- content here -->
             </TextContainer>
         </TextCard>
         {/if}

     </ParallaxSection>
    {:else}
    <ContentSection>
        {#if Section.Content.Tags}

            <TagContainer id={"1"}>

             {#each Section.Content.Tags as Tag}
                <TagButton id={"1"} to={"/"} >{Tag}</TagButton>
             {/each}
            </TagContainer>
        {/if}

        <TextContainer>
            <h1 class="text-center">{Section.Content.Title}</h1>
    
            <p >{Section.Content.Text}</p>
    
        </TextContainer>
    
        
        {#if Section.Content.Videos == true}
            <CardContainer class="static ">

                {#each VData.Videos as Video}
                <VideoCard class="" to="/videos/{Video.ID}" image={Video.Content.Thumb} title={Video.Content.Title} description={Video.Content.Description} />
                {/each}

            </CardContainer>
        {/if}

    </ContentSection>
    {/if}
{/each}





<style>


</style>
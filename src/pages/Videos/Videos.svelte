<script lang=ts >
    import TagButton from '../../components/Buttons/TagButton.svelte'
    import TextContainer from '../../components/Containers/TextContainer.svelte'
    import ParallaxSection from '../../components/Sections/ParalaxSection.svelte'
    import TagContainer from '../../components/Containers/TagContainer.svelte'
    import ContentSection from "../../components/Sections/ContentSection.svelte"
    import CardContainer from "../../components/Containers/CardContainer.svelte"
    import VideoCard from "../../components/Cards/VideoCard.svelte"
    import CommentCard from "../../components/Cards/CommentCard.svelte"

    import VideoInfoSection from "../../components/Sections/VideoInfoSection.svelte"
    
    import { params } from "../../router/index"



    $:videos=false;
    $:comments=true;


    const ShowComments =()=>{
        comments = true;
        videos = false;
    }

    const ShowVideos =()=>{
        comments = false;
        videos = true;
    }
    
    

    import VData from "../../Data/Videos.json";

   
   
</script>

<!-- this should only show when user is watching a video chosen -->

{#if $params.id}
<div class="">
    <video controls poster="{VData.Videos[$params.id].Content.Thumb}" class="w-[100%]  bg-[#000] max-w-readable mx-auto">
        
        <!-- captions 
        add the source for captions if any -->
        <track default
           kind="captions"
           srclang="en"
           src="/media/examples/friday.vtt">
       

        <!-- source for video  -->
        <!-- you can add more than one source, and they well act as alternatives -->
        <source src="{VData.Videos[$params.id].Content.Video}" type="video/mp4" >

        <!-- you can add a link to allow people to donwload video -->
        <!-- <p>
            Your browser doesn't support HTML video. Here is a
            <a href="/video/video2.mp4">link to the video</a> instead.
        </p> -->
    </video>

    
    <VideoInfoSection  
    class=" border-transparent border-3xthick overflow-hidden  " >
    

            <h2 >{VData.Videos[$params.id].Content.Title}</h2> 
            {#each VData.Videos[$params.id].Tags as Tag}
                 <!-- content here -->
                 <TagButton id={"1"} to={"/"} >#{Tag}</TagButton>
            {/each}
            
            <TagContainer>

            </TagContainer>            
            <p  >{VData.Videos[$params.id].Content.Description}
            </p>


            <h3 >{$params.id}</h3> 

    </VideoInfoSection >

    <ContentSection>
        <div class="mx-thick flex justify-evenly gap-thin rounded-full border-gold border-xthin p-thick">
            <button class=" {videos ? "[&>h3]:text-accent bg-gold " : "" } font-bold border-thin border-transparent rounded-xl min-w-[100px] transition-all duration-300" on:click={ShowVideos}>
                <h3 class="text-lg" >Videos</h3>
            </button>
            <button class="{comments ? "[&>h3]:text-accent bg-gold " : "" } font-bold border-thin border-transparent rounded-xl min-w-[100px] transition-all duration-300" on:click={ShowComments}>
                <h3 class="text-lg" >Comments</h3>
            </button>
        </div>
    
    </ContentSection>

</div>
     





    <ContentSection class="{videos ? "" : "hidden"}">

        <CardContainer class="static ">

            {#each VData.Videos as Video}
            {#if Video.ID !== $params.id}
                 <!-- content here -->
                 <VideoCard class="" to="/videos/{Video.ID}" image={Video.Content.Thumb} title={Video.Content.Title} description={Video.Content.Description} />
            {/if}
            {/each}

        </CardContainer>
    </ContentSection>

    <ContentSection class="{comments ? "" : "hidden"}">

        <TextContainer>
            <CardContainer class="grid-flow-row !grid-cols-[1fr] ">
                {#each VData.Videos[$params.id].Comments as Comment}
                    <!-- content here -->
                    <CommentCard>
                        <h3>User</h3>
                        <p>{Comment.Content.Text}</p>
                    </CommentCard>
                {/each}
                
            </CardContainer>
        </TextContainer>
    </ContentSection>
    
{:else}


    <CardContainer class="static ">

        {#each VData.Videos as Video}
            <VideoCard class="" to="/videos/{Video.ID}" image={Video.Content.Thumb} title={Video.Content.Title} description={Video.Content.Description} />
        {/each}

    </CardContainer>


{/if}

<style>
    
</style>
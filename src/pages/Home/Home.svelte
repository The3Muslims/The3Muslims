<script lang=ts >

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

<!-- todo : dinamically generate content of this page. -->


<!-- image is the  fixed background image for the section -->
<ParallaxSection
image="/images/background3.png"
>
    <!-- this image will move with scroll -->
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
    src="/images/Logo.png" alt=""
    >

    <!-- card can be placed in the scrtion but position needs to be specified
         it also can move with scroll but this has to be added in the function. 
        cardPhone
    -->
    <TextCard 
    id="parallax"
    class="
    absolute
    top-[calc(50%_-_theme(height.parallaxCard)/2)]
    left-[theme(width.ladingImage)]
    transition-[right_,_left,_width] 
    
    desktop:left-[calc(theme(width.readable)]

    max-w-readable 
    max-h-[calc((theme(height.parallaxSection)/2))] 

    tablet:right-2xthick 

    max-tablet:left-2xthick
    max-tablet:right-2xthick
    ">
        <TextContainer>
            <h1>Hello world</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim veritatis nemo officia distinctio ad, odit in reiciendis laboriosam quidem inventore, blanditiis ea? Facilis ullam nesciunt harum quo explicabo itaque. Magni!
            Illo suscipit explicabo ipsam cumque perferendis possimus, quas quam fuga nemo soluta asperiores saepe reprehenderit? Vero ullam ea cum voluptatem quo ducimus ipsam quibusdam incidunt, nobis sapiente possimus repellat necessitatibus?
            Adipisci minima perspiciatis voluptates beatae dolores veniam deleniti quis laborum commodi, quia est rerum pariatur laboriosam soluta illo vero autem esse quam! Distinctio animi optio omnis explicabo fuga velit consectetur.
            Velit sunt, exercitationem ipsam quod eaque suscipit perferendis magnam obcaecati dolore neque nobis nostrum sapiente assumenda quaerat consectetur ea, amet, reiciendis deserunt cum impedit quae. Voluptatibus modi aspernatur repudiandae molestias?</p>
        </TextContainer>
    </TextCard>
</ParallaxSection>




<ContentSection>
    <!-- use unique number to refer to the container  -->
    <TagContainer id={"1"}>
        <!-- todo, make tags do things -->
        <TagButton id={"1"} to={"/"} >default</TagButton>
        <TagButton id={"1"} to={"/"} >test</TagButton>
        <TagButton id={"1"} to={"/"} >lorem</TagButton>
        <TagButton id={"1"} to={"/"} >ipsum</TagButton>
        <TagButton id={"1"} to={"/"} >dolor</TagButton>
        <TagButton id={"1"} to={"/"} >sit</TagButton>
        <TagButton id={"1"} to={"/"} >consectetur</TagButton>
        <TagButton id={"1"} to={"/"} >tenetur temporibus harum</TagButton>
    </TagContainer>


    <TextContainer>
        <h1 class="text-center">Lorem Ipsum</h1>

        <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas libero magni temporibus, ipsum minima ex molestias earum reiciendis recusandae impedit sit ea in unde obcaecati eveniet perspiciatis deleniti pariatur saepe.
        Adipisci facere provident cum, tenetur temporibus harum architecto rem odit debitis eum itaque laboriosam ex esse dolorem delectus non ab dignissimos error vitae, illo nisi velit, similique porro? Vel, mollitia?
        Exercitationem ipsa fugiat voluptatibus pariatur sequi. Explicabo veniam voluptatem ipsum sapiente praesentium. Odio, exercitationem nobis officiis itaque, sit neque assumenda nesciunt suscipit tempore iure, fugit quos accusantium beatae modi culpa?
        Tempore at aliquam omnis vitae perferendis sapiente voluptatem, odio ipsum excepturi, eos non nobis placeat nulla harum reiciendis voluptas? Ullam delectus repudiandae aperiam praesentium, temporibus nostrum odit quasi in rerum!
        Eaque ut natus officia est debitis minus placeat odio eos eum ad iusto, illo mollitia delectus, dicta quibusdam, sit eveniet error culpa. Quidem rem omnis repudiandae reprehenderit nemo numquam quisquam?
        Ipsa voluptatibus maxime cupiditate ab ducimus distinctio nesciunt, perspiciatis et. Esse enim voluptatem sint, ex aspernatur repudiandae, eos nemo architecto eius natus unde quis labore eaque dignissimos repellat itaque sed.
        Error est ullam id magni vero veniam earum labore reprehenderit similique doloribus blanditiis libero cumque eum consequatur illo dolore, eveniet et! Facere non quo corrupti excepturi sed mollitia repellendus rerum.
        Quasi dolorum iure, est sit, ut dignissimos asperiores consectetur blanditiis distinctio ad, tempore possimus? Excepturi, officia illo velit error tenetur repellendus doloremque ipsum consequatur quisquam eos, voluptatem perspiciatis voluptates labore!
        Illum nesciunt, nostrum odio eius laboriosam laborum autem quis odit itaque ea ut reprehenderit, mollitia quibusdam id enim veritatis. Ipsum ratione cumque repudiandae quidem neque deserunt totam exercitationem similique error.
        Commodi iste quam doloribus laudantium architecto aliquid magnam repudiandae. Rerum magnam obcaecati laudantium suscipit sequi dolor cupiditate optio enim, perferendis ab quos eligendi nihil amet quo doloremque fugit nemo fuga.</p>

    </TextContainer>


</ContentSection>


<ParallaxSection
image="/images/background3.png"
>
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
    src="/images/mosque2.png" alt=""
    >

    <TextCard 
    id="parallax"
    class="
    absolute
    top-[calc(50%_-_theme(height.parallaxCard)/2)]
    left-[theme(width.ladingImage)]
    transition-[right_,_left,_width] 
    
    desktop:left-[calc(theme(width.ladingImage)+5%)]
    desktop:right-[5%]
    max-w-readable 
    max-h-[calc((theme(height.parallaxSection)/2))] 

    tablet:right-2xthick 
    max-tablet:left-2xthick
    max-tablet:right-2xthick
    
    ">
        <TextContainer>
            <h1>Hello world</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim veritatis nemo officia distinctio ad, odit in reiciendis laboriosam quidem inventore, blanditiis ea? Facilis ullam nesciunt harum quo explicabo itaque. Magni!
            Illo suscipit explicabo ipsam cumque perferendis possimus, quas quam fuga nemo soluta asperiores saepe reprehenderit? Vero ullam ea cum voluptatem quo ducimus ipsam quibusdam incidunt, nobis sapiente possimus repellat necessitatibus?
            Adipisci minima perspiciatis voluptates beatae dolores veniam deleniti quis laborum commodi, quia est rerum pariatur laboriosam soluta illo vero autem esse quam! Distinctio animi optio omnis explicabo fuga velit consectetur.
            Velit sunt, exercitationem ipsam quod eaque suscipit perferendis magnam obcaecati dolore neque nobis nostrum sapiente assumenda quaerat consectetur ea, amet, reiciendis deserunt cum impedit quae. Voluptatibus modi aspernatur repudiandae molestias?</p>
        </TextContainer>
    </TextCard>
</ParallaxSection>




<ContentSection>
    <!-- use unique number to refer to the container  -->
    <TagContainer id={"1"}>

        <TagButton id={"1"} to={"/"} >default</TagButton>
        <TagButton id={"1"} to={"/"} >test</TagButton>
        <TagButton id={"1"} to={"/"} >lorem</TagButton>
        <TagButton id={"1"} to={"/"} >ipsum</TagButton>
        <TagButton id={"1"} to={"/"} >dolor</TagButton>
        <TagButton id={"1"} to={"/"} >sit</TagButton>
        <TagButton id={"1"} to={"/"} >consectetur</TagButton>
        <TagButton id={"1"} to={"/"} >tenetur temporibus harum</TagButton>
    </TagContainer>


    <CardContainer class="static ">
        <VideoCard class="" to="/" image={Image} title={Title} description={Text}/>
        <VideoCard class="" to="/" image={Image} title={Title} description={Text}/>
        <VideoCard class="" to="/" image={Image} title={Title} description={Text}/>
        <VideoCard class="" to="/" image={Image} title={Title} description={LongText}/>
        <VideoCard class="" to="/" image={Image} title={Title} description={LongText}/>
        <VideoCard class="" to="/" image={Image} title={Title} description={LongText}/>
            
        
        
    </CardContainer>


</ContentSection>




<style>


</style>
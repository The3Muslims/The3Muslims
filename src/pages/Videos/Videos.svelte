<script lang=ts >
    import TagButton from '../../components/Buttons/TagButton.svelte'
    import TextCard from '../../components/Cards/TextCard.svelte'
    import TextContainer from '../../components/Containers/TextContainer.svelte'
    import ParallaxSection from '../../components/Sections/ParalaxSection.svelte'
    import TagContainer from '../../components/Containers/TagContainer.svelte'
    import ContentSection from "../../components/Sections/ContentSection.svelte"
    import CardContainer from "../../components/Containers/CardContainer.svelte"
    import VideoCard from "../../components/Cards/VideoCard.svelte"
    import CommentCard from "../../components/Cards/CommentCard.svelte"

    import VideoInfoSection from "../../components/Sections/VideoInfoSection.svelte"
    
    import { Link, params } from "../../router/index"



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
    
    let Title="Title"
    let Text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius placeat mollitia ipsa vitae qui, recusandae dolore ab, aspernatur quo modi voluptas culpa nihil voluptate perspiciatis exercitationem rem soluta incidunt laboriosam."
    let Image = `/images/mosque2.png`

</script>

<!-- this should only show when user is watching a video chosen -->

{#if $params.id}
<div class="">

    <video controls poster="/images/Logo.png" class="w-[100%]  bg-[#000] max-w-readable mx-auto">
        
        <!-- captions 
        add the source for captions if any -->
        <track default
           kind="captions"
           srclang="en"
           src="/media/examples/friday.vtt">
       

        <!-- source for video  -->
        <!-- you can add more than one source, and they well act as alternatives -->
        <source src="/video/video3.mkv" type="video" >
        <source src="/video/video2.mp4" type="video/mp4" >

        <!-- you can add a link to allow people to donwload video -->
        <!-- <p>
            Your browser doesn't support HTML video. Here is a
            <a href="/video/video2.mp4">link to the video</a> instead.
        </p> -->
    </video>

    
    <VideoInfoSection  
    class=" border-transparent border-3xthick overflow-hidden  " >
    

            <h2 >Title</h2> 

            <p  >Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae repellat ex ipsam nam perspiciatis dolor fugiat laboriosam aut, sunt doloremque accusantium cupiditate dignissimos fuga rem expedita ipsa impedit iste porro.
            Temporibus dolore sit ipsa? Iste, rerum, architecto ratione animi quidem laborum iure voluptates sequi provident, quasi culpa explicabo nisi quas! Corporis deserunt distinctio inventore dicta excepturi obcaecati asperiores earum voluptatum.
            Officia autem perspiciatis et doloribus odio, dolorum facilis magnam voluptates sint amet unde ratione! Dolores distinctio fugiat soluta hic asperiores repudiandae error, autem in tempore quidem aliquid placeat commodi quas.
            Eaque cupiditate mollitia exercitationem excepturi ullam, ad doloremque, rem quia laudantium impedit pariatur! Consectetur vel aut enim labore magni eligendi tenetur, autem eos dolorum quod, minima porro eum, vitae dignissimos.
            Iusto, incidunt? Laborum, necessitatibus esse commodi saepe tempore nam. Impedit, necessitatibus iste. Ipsum, ea minus? Pariatur repellat similique ex culpa optio aliquid, atque, ducimus libero debitis voluptas assumenda quas animi!
            Molestias consectetur beatae modi soluta nam doloremque ducimus, sapiente dolorem sunt blanditiis eum, quas reprehenderit quae cumque alias nesciunt recusandae deserunt ratione. Nam pariatur eligendi facilis officia dolores quisquam fugit.
            A ad vitae illum rem odio iure saepe animi fuga perspiciatis dolorum error quo illo, aliquam natus nesciunt? Odit eaque, non nostrum nisi sint voluptatum ullam ea delectus tenetur blanditiis.
            Quo unde assumenda expedita eveniet voluptatum exercitationem, asperiores possimus dolores harum nesciunt autem inventore ad rem excepturi esse est obcaecati numquam corrupti quibusdam dolorum perspiciatis ipsam eaque aperiam iste. Quasi?
            Deserunt illo ipsam voluptas consequatur facere soluta architecto delectus nobis, reiciendis pariatur aperiam natus, cum sit aspernatur nemo, molestiae blanditiis neque quisquam nesciunt dolores necessitatibus saepe impedit iure. Explicabo, dolorum?
            Laborum doloribus iure ad quisquam dolores quidem possimus debitis non accusamus hic cum nam error, rem adipisci officia suscipit a, ea dicta atque voluptatum? Debitis dicta accusamus accusantium dolor minus.
            Id sed reiciendis quod ullam molestiae sit, aperiam vero voluptatibus pariatur placeat. Deleniti a molestiae facilis praesentium, itaque vel vero id illo sunt rem modi est illum at dolores reiciendis.
            Temporibus, beatae vel praesentium suscipit deleniti amet pariatur. Obcaecati voluptatem assumenda optio! Et expedita optio architecto sunt similique, beatae exercitationem. Optio labore eaque tenetur sapiente dolorum ea. Obcaecati, mollitia quasi.
            Voluptatem consequuntur eum, iusto saepe eaque ut reiciendis molestias dolorem minima repudiandae tenetur atque cum possimus quos nobis quisquam ea adipisci temporibus excepturi accusantium blanditiis corrupti perspiciatis recusandae vero. Repellendus!
            Aliquam placeat sit nulla, dolores, adipisci veniam provident quia dolorem animi nemo saepe veritatis assumenda debitis nesciunt vel optio magni dignissimos hic laudantium doloremque enim, amet ea dicta! Error, hic!
            Expedita ipsa sit quasi. Assumenda aut, fugiat, ducimus laboriosam molestias odit vero, aliquid quia eveniet consequuntur quaerat molestiae recusandae? Et obcaecati quod modi unde debitis esse provident, ullam fugiat repellendus.
            Temporibus commodi voluptate cupiditate, alias illum, omnis assumenda nihil officiis eveniet velit quidem saepe nisi earum, quo totam ex? Ab quos, itaque tempora obcaecati delectus architecto explicabo molestias similique magni!
            Cupiditate, doloribus voluptas voluptatibus nihil veniam vero ex recusandae, exercitationem rerum nulla minus adipisci debitis! A, veniam non voluptatem tenetur sapiente nulla nesciunt, deleniti excepturi ducimus, veritatis est ad vero?
            Minima sed, illo repellat eius nemo ipsam adipisci eaque dolorum odit magnam atque praesentium consequatur repellendus, placeat aut labore ipsa commodi corrupti. Minus quos vel at incidunt iste consequatur quas.
            Iusto dolore perspiciatis debitis deserunt assumenda hic repellendus non in delectus, facilis veniam dolores aperiam! Non doloremque ad alias nulla illum, repellat dolore sunt, voluptatem dolor, porro inventore accusantium temporibus.
            Neque itaque eius quos nostrum corrupti error, voluptatem placeat blanditiis aliquid dignissimos sapiente suscipit inventore. Suscipit, repellendus. Provident, officiis dolores, ducimus quas alias voluptatibus asperiores, libero quis ipsam odit unde!
            Voluptatem autem eum distinctio fugit, eius laborum quis labore at neque dolorum voluptatum similique, perspiciatis beatae totam dignissimos assumenda error facilis aliquid adipisci modi! Voluptatem consectetur totam accusantium quasi accusamus?
            A omnis explicabo, qui cum in placeat, quo velit quisquam ex rem corrupti molestiae commodi eligendi beatae minima ducimus nesciunt amet sunt fugiat maiores itaque dolorem esse! Veritatis, minus officia.
            Mollitia, pariatur consequatur fugit quia, ad amet est harum, maxime officia laudantium a! Dolor, vitae similique quos libero dignissimos reiciendis quisquam placeat! Quas, vitae. Voluptatum maiores fugit enim inventore magni.
            Eius nam consequuntur, accusantium ab, repellat nisi at soluta nostrum repudiandae eum aut assumenda praesentium dolorum, necessitatibus veritatis eaque molestiae ut qui totam velit incidunt illum. Nostrum maiores repudiandae iste.
            Officiis in dolorem recusandae accusamus natus. Architecto facilis ab obcaecati consequatur quidem velit id cum? Laborum cum libero reiciendis, tempora, nesciunt placeat accusantium minus eos odio saepe hic quaerat voluptatibus.
            Fuga enim temporibus perspiciatis odit magnam voluptates numquam sapiente voluptas! Rem magni unde assumenda dicta consequatur eaque libero vel odio, voluptatem, corporis laudantium aliquam iste. Numquam voluptas reiciendis sunt fugit?
            Rerum, exercitationem? Reprehenderit fugit accusantium accusamus illo explicabo commodi temporibus labore at magni modi dolor laudantium aliquam, dicta eos? Suscipit delectus, nihil in odio id nobis quaerat! Debitis, corrupti quo.
            Excepturi fugiat voluptate voluptates dolorem eveniet sunt quisquam magni fugit ipsam repellat reiciendis, dolore debitis, est porro dolorum, tempora assumenda. Magnam eveniet cupiditate excepturi dicta maiores vero error eligendi suscipit?
            Itaque, earum maiores cupiditate eaque nihil ut illo excepturi perspiciatis quam ad vero culpa cumque sint aliquam ratione doloribus nobis beatae alias accusantium suscipit atque repudiandae aut voluptatibus! Deleniti, porro!
            Nihil quam ad voluptatibus? Iure, tempora illo! Qui tempora fugit sint vero repudiandae aut odit, nemo porro maiores molestias perspiciatis et iure voluptate est architecto quasi, rem soluta iste provident?
            Fuga facere quasi quam necessitatibus ratione aperiam reprehenderit illo iste labore eveniet veniam neque nemo minima vel praesentium, quidem veritatis consectetur itaque. Facilis placeat nesciunt ut temporibus ad distinctio aspernatur.
            Perferendis nam iusto, eveniet ex ipsum dignissimos nostrum non cupiditate quis explicabo odio consequatur eius totam, magnam sit neque. Laudantium ea nostrum sint! Ducimus veritatis in perspiciatis, reiciendis id minima.
            Distinctio enim ab saepe voluptates ad blanditiis. Eum, totam? Quas consequatur similique explicabo fugit iusto vero esse facilis error vitae ea, consequuntur iure necessitatibus sunt quam quia provident ducimus repellat?
            Quis sunt non molestias, dolorum ab perspiciatis iure deserunt veritatis minus laudantium rem ea consequuntur ipsum soluta dolore dolor doloribus voluptas? Soluta, labore minus perspiciatis odit autem nihil ducimus in?
            Eos esse aperiam in aliquid placeat totam ducimus necessitatibus tenetur, porro eum. Distinctio dolor sint maxime alias at cum impedit asperiores doloremque, quae dicta eum tenetur placeat dignissimos facere corporis.
            Est explicabo, earum rerum dolor eum mollitia cumque consequuntur exercitationem hic pariatur repellat ad ipsam inventore. Numquam perferendis suscipit dolorem facere animi dolorum quos voluptatibus, doloribus maxime, aliquid ipsam quidem.
            Animi, laborum odio? Molestiae numquam necessitatibus saepe sunt odit perferendis ullam et dolores? Vero, illum impedit fuga consectetur fugiat non doloremque eum nam animi officia ullam totam, iusto accusantium quidem?
            Quisquam veritatis reiciendis a corrupti repellendus dolores sit perferendis quae harum atque sequi, ex aut beatae, commodi, deserunt repudiandae placeat. Ipsum placeat fuga eligendi odio aut labore aliquid, perferendis sunt.
            In illum sint itaque non est voluptatum, quidem optio dolores modi necessitatibus iure hic fugit repellat impedit harum quo repudiandae rerum accusantium officiis eos sapiente? Nulla enim labore veniam eaque.
            Odio, voluptas asperiores ducimus praesentium commodi placeat totam, hic similique necessitatibus aut quo, in vel laudantium. Ab ducimus repellat corrupti atque, fugit dignissimos sint porro vero, ipsa tempora nostrum iste.
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

        <CardContainer>
            <VideoCard class="" to="/videos/1" image={Image} title={Title} />
            <VideoCard class="" to="/videos/3"  title={Title} />
            <VideoCard class="" to="/videos/2" image={Image} title={Title} />
        </CardContainer>
    </ContentSection>

    <ContentSection class="{comments ? "" : "hidden"}">

        <TextContainer>
    
            <CardContainer class="grid-flow-row !grid-cols-[1fr] ">
                <CommentCard>
                    <h3 >Test</h3>
                    <p class="transition-all" >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Et ducimus voluptate repudiandae quidem repellat ab minus, exercitationem quisquam sed corporis suscipit distinctio aliquid provident commodi animi reprehenderit optio temporibus vero?
                    Magnam, minus asperiores praesentium, sed assumenda quam voluptatem voluptatum ipsa deleniti iure necessitatibus placeat labore velit culpa laboriosam atque error quas facere, repellat soluta? Doloribus perspiciatis provident illo earum rerum.
                    Saepe voluptates enim architecto eligendi accusamus totam, illo, laudantium nesciunt voluptatibus ipsum unde deserunt atque cum excepturi, earum ratione illum? Quidem, voluptate sequi quam doloribus doloremque aspernatur asperiores ipsa reiciendis.
                    Velit voluptates, aut quisquam architecto nam, expedita sequi obcaecati inventore dolores sapiente voluptatum porro autem in ab error tenetur ducimus nulla soluta harum neque, mollitia nesciunt quos tempore cum! Unde.
                    Natus deleniti reprehenderit maiores. Beatae repellendus qui tempore ipsa, animi nulla non debitis minus, totam quidem sint molestias! Et eligendi repudiandae laudantium facilis? Unde molestiae mollitia ea error sit reiciendis.
                    Doloremque velit sunt harum enim provident a, tempora sint esse officia asperiores, cumque iusto maxime quam saepe modi eos voluptatem laborum voluptates. Sit, sed sapiente eius harum ullam accusantium veniam?
                    </p>
                </CommentCard>
    
                <CommentCard>
                    <h3 >Test</h3>
                    <p class="transition-all" >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Et ducimus voluptate repudiandae quidem repellat ab minus, exercitationem quisquam sed corporis suscipit distinctio aliquid provident commodi animi reprehenderit optio temporibus vero?
                    Magnam, minus asperiores praesentium, sed assumenda quam voluptatem voluptatum ipsa deleniti iure necessitatibus placeat labore velit culpa laboriosam atque error quas facere, repellat soluta? Doloribus perspiciatis provident illo earum rerum.
                    Saepe voluptates enim architecto eligendi accusamus totam, illo, laudantium nesciunt voluptatibus ipsum unde deserunt atque cum excepturi, earum ratione illum? Quidem, voluptate sequi quam doloribus doloremque aspernatur asperiores ipsa reiciendis.
                    Velit voluptates, aut quisquam architecto nam, expedita sequi obcaecati inventore dolores sapiente voluptatum porro autem in ab error tenetur ducimus nulla soluta harum neque, mollitia nesciunt quos tempore cum! Unde.
                    Natus deleniti reprehenderit maiores. Beatae repellendus qui tempore ipsa, animi nulla non debitis minus, totam quidem sint molestias! Et eligendi repudiandae laudantium facilis? Unde molestiae mollitia ea error sit reiciendis.
                    Doloremque velit sunt harum enim provident a, tempora sint esse officia asperiores, cumque iusto maxime quam saepe modi eos voluptatem laborum voluptates. Sit, sed sapiente eius harum ullam accusantium veniam?
                    </p>
                </CommentCard>
    
            </CardContainer>
        </TextContainer>
    </ContentSection>
    
{:else}


    <CardContainer>
        <VideoCard class="" to="/videos/1" image={Image} title={Title} />
        <VideoCard class="" to="/videos/3"  title={Title} />
        <VideoCard class="" to="/videos/2" image={Image} title={Title} />
    </CardContainer>


{/if}

<style>
    
</style>
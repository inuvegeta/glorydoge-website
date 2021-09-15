import styled, { css } from 'styled-components'
import { rgba } from 'polished'
import Image from 'next/image'
import Script from 'next/script'

import SEO from '../components/SEO'

import gloryDogeLogo from '../assets/images/glorydoge.png'

export default function Home() {
  return (
    <>
      {/* Global site tag (gtag.js) - Google Analytics */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
        onLoad={() => {
          if (typeof window === 'undefined') return
          window.dataLayer = window.dataLayer || []
          function gtag() {
            dataLayer.push(arguments)
          }
          gtag('js', new Date())

          gtag('config', process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS)
        }}
      />
      <SEO
        title="GloryDoge Coin"
        image="/og_image.png"
        description="Building platforms & tools to secure DeFi investors' funds during IDO private sales and pre-sales."
      />
      <Container>
        <AsciiLogoContainer>
          <pre>{ASCII_LOGO}</pre>
        </AsciiLogoContainer>
        <GlassEffect />
        <TextContainer>
          <h1>GloryDoge</h1>

          <h2>
            {`Building platforms & tools to secure DeFi investors' funds during IDO private sales and pre-sales.`}
          </h2>

          <LinksContainer>
            <CustomLink href="https://t.me/GloryDogeCoin" target="_blank">
              Join us on Telegram
            </CustomLink>
            <CustomLink href="https://twitter.com/GloryDogeCoin" target="_blank">
              Follow us on Twitter
            </CustomLink>
            <CustomLink href="https://github.com/GloryDoge" target="_blank">
              GitHub
            </CustomLink>
            <CustomLink href="https://docs.glorydogecoin.com" target="_blank">
              White Paper
            </CustomLink>
            <CustomLink href="#" target="_blank" disable>
              Join the pre-sale contest (soon)
            </CustomLink>
          </LinksContainer>

          <p>
            We are here to disrupt. We are here for glory.
            <br />
            #GloryDoge | #GloryPush | #GlorySale
          </p>
        </TextContainer>
        <LogoContainer>
          <Logo>
            <Image className="logo" src={gloryDogeLogo} alt="" />
          </Logo>
        </LogoContainer>
      </Container>
    </>
  )
}

const Container = styled.div`
  width: 100%;
  min-height: 100%;
  flex: 1;
  display: flex;
  position: relative;
  overflow: hidden;
  color: #fff;

  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
    overflow-y: auto;
  }
`

const GlassEffect = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 44%;
  background: ${rgba('#1089FF', 0.4)};
  transform-origin: top right;
  transform: skew(-10deg, 0deg);
  box-shadow: 0 0 20px 0 ${rgba('#000', 0.5)};

  @media (max-width: 1000px) {
    display: none;
  }
`

const AsciiLogoContainer = styled.div`
  flex: 1;
  font-size: 10px;
  letter-spacing: -0.5px;
  color: #000;
  position: absolute;
  opacity: 0.6;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;

  @media (max-width: 1400px) {
    font-size: 6px;
  }
`

const LogoContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 1;

  @media (max-width: 1000px) {
    order: 1;
    width: 100%;
    height: 300px;
    padding: 30px 0;
  }
`

const Logo = styled.div`
  width: 400px;

  img {
    pointer-events: none;
    user-select: none;
  }

  @media (max-width: 1400px) {
    width: 300px;
  }

  @media (max-width: 1000px) {
    width: 200px;
  }
`

const TextContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 1;
  padding: 0 120px 0 80px;
  box-sizing: border-box;

  h1 {
    font-family: 'Expletus Sans', sans-serif;
    font-size: 60px;
    margin-bottom: 0;
  }

  h2 {
    font-size: 36px;
    font-weight: 400;
    line-height: 52px;
  }

  p {
    font-size: 12px;
    line-height: 22px;
  }

  @media (max-width: 1400px) {
    h1 {
      font-size: 40px;
    }

    h2 {
      font-size: 20px;
      line-height: 36px;
    }

    p {
      font-size: 10px;
      line-height: 20px;
    }
  }

  @media (max-width: 1000px) {
    order: 2;
    width: 320px;
    padding: 0 0 30px;
  }

  @media (max-width: 360px) {
    width: 300px;

    h1 {
      font-size: 30px;
    }

    h2 {
      font-size: 16px;
      line-height: 32px;
    }
  }
`

const LinksContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 15px;
  grid-row-gap: 15px;
`

const CustomLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${rgba('#fff', 0.2)};
  color: #fff;
  text-decoration: none;
  height: 50px;
  padding: 0 20px;
  border-radius: 4px;
  border: 1px solid ${rgba('#fff', 0.4)};
  transition: all 0.2s ease;

  &:hover {
    background: #fff;
    border: 1px solid #fff;
    color: #222;
  }

  &:last-of-type {
    grid-column: span 2;
  }

  ${props =>
    props.disable &&
    css`
      pointer-events: none;
      opacity: 0.5;
    `}

  @media (max-width: 1400px) {
    font-size: 12px;
    padding: 0 12px;
    height: 40px;
  }

  @media (max-width: 360px) {
    font-size: 11px;
  }
`

const ASCII_LOGO = `
                               ..::::..                                                                                                                                                                
                            .-=+++++++++++==--:..                                                                                                                               .:::--::.               
                          .=++++++++++++++++++++++=-:                                                                                                                     .:-=++++++++++++=-.           
                         .=++++*#########***++++++++++=-.                                                                                                            .:-=++++++++++++++++++++=.         
                        .+++++###################**++++++=-.                                                                                                     .:=+++++++++**##########*+++++=.       
                        =++++######*+==+++**#########*++++++=:                                                                                                 :=+++++++**#################*+++++.      
                       :++++*####*====+++++++++*########*+++++=:                                                                                             :=+++++**#######################++++=.     
                       =++++#####====++++++++++++*########*++++++:                                                                                         -=+++++###############*****########++++=     
                      :++++*####*===++++++++++++++++########*+++++=:                                                                                     :=+++++###########**************######++++-    
                      =++++#####+===+++++#####*+++++++*########+++++=.                                                                                .-+++++*#########********************####*++++.   
                     :++++*#####====++++########*+++++++########*+++++-.:::--=========---:::.                                                       .-+++++*########***********************#####++++-   
                     =++++######==+++++*######***+++++++++########*++++++++++++++++++++++++++++==------==+++==-.........::::::::::...             :=+++++*########***********#####**********####*+++=   
                    .++++*######==+++++*#######*+++++++++++*########+++++++++**********++++++++++++++++++++++++++++++++++++++++++++++++==-:.    -=+++++*#######**********###########*********####++++.  
                    -++++#####*#==+++++##########*+++++++++++*################################***+++++*******+++++++++++++++++++++++++++++++++=++++++*########*********#############*********####++++:  
                    +++++####*=*==+++++*###########*+++++++++++*######################################################################***+++++++++*#########**********###############********####++++-  
                   :++++*####*====+++++*############*++++++++++++*###########################################################################***###########**************############*********###++++=  
                   -++++######====+++++*#############++++++++++++++#############*+++++++****############################******#########################****************#############**********###++++=  
                   =+++*######====++++++#############*++++++++++++++########**++++++++++++***********************************+++++++++**#############****************###############**********###++++=  
                  .++++*######====++++++##############++++++++++++++######*+++++++++++++++++*************+++************************++++++**###########*************################**********###++++=  
                  :++++#######====++++++#############*++++++++++++*#####++++++**#*++++++++++++*******+++++++****************************++++++**##########*********################**********####++++=  
                  -++++#######===+++++++*###########*+++++++++++*#####*++++####*++++++++++++++++*++++++++++++********++++*****************+++++++**#########********##############**********#####++++-  
                  -++++#######+====++++++##########*+++++++++*######*++++*####++++++++++++++++++++++++++++++++**+++++++*********************+++++++++*########***#################**********#####++++:  
                  =++++#######+====++++++##########+++*+++*#######*+++++####*+++++++++++++++++++++++++++++++++++++++++************************++++++++**########**###############**********######++++:  
                  =++++#######+====++++++*#########+*#*+*#######*=+++++#####++++++++++++++++++++++++++++++++++++++++++**************************+++++++**#########*#############***********######++++:  
                  =+++*#######+====++++++*############*#######*==+++++#####*+***+++++++++++++++++++++++++++++++++++++******************************+++++++**###################************######++++-  
                 .++++*#######+====++++++**+*###############*===+++++#########++++++++++++++++++++++++++++++++++++++***********************************++++++*################************#######++++-  
                 :++++########=====++++++*+++*############*===++++++*+++#####+++++++++++++++++++++++++++++++++++++++**************************************++++++*############*************#######++++-  
                 =++++########=====+++++++++++##########+===++++++++++*####*+++++++++++++++++++++++++++++++++++++++*****************************************++++++*########***************#######++++-  
                .++++*#######+====++++++++++++*#######+==+++++++++++*#####*++++++++++++++++++++++++++++++++++++++++*******************************************++++++*########*************#######++++:  
                :++++#######*====+++++++++++++####**===++++++++++*######*+++++++++++++++++++++++++++++++++++++++++**********************************************++++++#########***********#######++++.  
                -++++######*====++++++++++++*##*+====+++++++++*#####*+++++++++++++++++++++++++++++++++++++++++++++*********************++++***********************+++++*#########*********######*+++=   
                ++++*#####*====+++++++++++*##*======++++++++*#***+++++++++++++++++++++++++++++++++++++++++++++++********************++++++**************************+++++*########********######++++-   
               :++++#####*====+++++++++*###+=======++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++********************+++++++****************************+++++#########******#####*++++.   
               -++++#####====+++++++*####*========++++++++++++*#########**++++++++++++++++++++++++++++++++++++++++++++++*********++++++++*******************************++++*########*****#####++++=    
               =+++*####+====++++*#####*======+==+++++++++++***++++++****###*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++**************+**********++++++++*#######***#####*++++.    
              .++++*####+====+++######+=====+++=+++++++++++++++++++++++++++++*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++***************+++++*******++++++++*######*######++++-     
              :++++#####=====+######+=====+++++=+++++++++++++++++******+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++**########********+++++*******++++++++*##########++++=      
              -++++#####+===*#####*=====+++++++++++++++++++++**############*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*##############*******+++++********++++++++*#######+++++.      
              =++++#####*=+######*===++++++++++++++++++++++++++++++**#########*++++++++++++++++++++++++++++++++++++++++++++++++++++++++*##########***####********++++*********++++++**#####+++++:       
              =++++######+######+===++++++++++++++++++++++++++++++++++*##########*+++++++++++++++++++++++++++++++++++++++++++++++++++*########********************+++++*********+++++#####+++++:        
              =++++############*===+++++++++++++++++++++++++++++++++**##############**+++**#++++++++++++++++++++++++++++++++++*##**##################***************++++*++******+++++####+++++:        
              -++++############====++++++++++++++++++++++++++++++*##########################++++++++++++++++++++++++++**+++++++*#######################****************++*++******+++++####+++++.       
              =++++###########+====+++++++++++++++++++++++++++*########+###################++++++++++++++++++++++++++***++++++++*###############+:.=######**************+++++******++++*####+++++.      
             =++++############+=====+++++++++++++++++++++***##########:  :=#############**+++++++++++++++++++++++++++***+*+++++++##############---  ########+++**********++++*******++++#####++++=      
            -++++*############+=====++++++++++++++++++++++++++++*#####. -*+*###+=######++++++++++++++++++++++++++++++*****+++++*########*..*#####. :######*+++************++++*******+++*#####++++-     
           -++++*#########+####===+++++++++++++++++++++++++++++++*####+  -*##*-  =######**+*+++++++++++++++++++++++++****++++**##########-  :--:  :#####*+++***************++++******++++*####*++++:    
          -++++*#########*==+*#*==++++++++===-===+++++++++++++++++*####*-      :*##########++++++++++++++++++++++++++****+++***############+-::-=#####*++++*****************+++*******++++#####++++=    
         :++++*##########+=====+==+++=:.           .:=++++++++++++++*#####****###########*++++++++++++++++++++++++++++**+++****####**###############*++++****++++++++********+++******+++++####*++++:   
         =++++##########*========--:              .-=++++++*+++++++++++*################*+++++++++++++++++++++++++++++**+++*****###***###########**+++*****+===========+*****++********++++*####++++=   
        =++++###########---:...                  .:-=++++++##*+++++++++++++++++*######**++++++++++++++++++++++++++++++**+++*****####***######*++++++******+==============++***+********+++++#####++++:  
       -++++*##########-...                           :=++++###*++++++++****####****++++++++++++++++++++++++++++++++++**++++*****###******#####**********+==============++************++++++*####*++++  
      :++++*##########+....                             -+++*#####**++++++++++++++++++++++++++++++++++++++++++++++++++**+++++******##********************+================++**********+++++++####*++++: 
      =++++##########*:...                               .=+++*########****++++++++++++++++++++++++++++++++++++++++++++*+++++******##*******************+===================+*********+++++++#####++++- 
     -++++##########*:....                                 =++++++********++++++++++++++++++++++++++++++++++++++++++++++++++++*******#******************+====================+*********++++++#####++++= 
    .++++*#########+.....                                  .=+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*************************+==================-===+*+++****++++++*####*++++ 
    =++++#########=.....        .                            =++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++***********************++=================== -=========++=--+++#####*++++.
   :++++*########+.....        *=   .                         :=++++++++++=++++++++++++++++++++++++++++++++++++===-=++++++++++*****************++++======================-  ===-=======:  .#*#####*++++.
   =++++#########.....        *##:=*                             ::---::.:++++++++++++++++++++++++++==--::::::::::::.:-=+++++*****************+==========================-  :::========:   #######*++++.
  .++++#########=....        +#####-                                    .+++++++++++++++++++=--:..                       :=++******+++*******+===========================-   :=========:   *######*++++.
  -++++#########-....        **####:                                    =+++++++++++++++==--::.. .:--==+++*****+=-.        .-******+===+****+============================-   ==========:   =######*++++.
  =+++++########.....         =####-                                   =++++++++++++=-.    .-=*#####*+==-:....:-+*##+:      :+*****+====+***==============================   ==========.   -######*++++ 
  ++++++#######*.......       #####:                                  :+++++++++++=.     =*####-.                  =##*-    -=+****======+*+==============================.  -=========.   .######+++++ 
  ++++++#######*.......      :#####                                   =++++++++++-     :######*.       :::::::--=+######*.  :=+****=======+===============================-  -=========    .######++++= 
 .++++++*######*.......      -####*                                  :+++++++++++      ##########*+++####################*  .==***+========================================  :========-     ######++++- 
 :+++++++######*......       =#####    :                ..           -++++++++++=     .###################################=  ==+**====================:     -===========-==  :========:     ######++++: 
 :++=++++*######.::....      =#####:  .*             ....            =++++++++++=     .###################################= .==+*+==================-----:   ===========.--  -========      #####*++++. 
 -+- =++++######*#=....      .#####*  *#            ....     -+#+:   =+++++++++++.     ############################**+-###: :===+====================+++==-  -========== .. .========-     :#####*++++  
 -.  :++++########*....       :#####=+##:           ...     =#####+. -+++++++++++=.    :###*-=+****++*#########*-:   .+##=  =======================+*###*==. -==========    =-.======.     +#####++++=  
      ++++*########:...        -########=            ...    +#######=.+++++++++++++-.   :*###+-:::=*####################= .=======================+######+=- -=========-      -======.    .######++++:  
      =++++########+....        *.*#####*            ....   .#########+++++++++=:.        :+##########################*.:=======================+*#######*== ==========.     .======-     =#####*++++   
      -++++**#######-...        .  +#####.            ....   -#########*++++=:               :=#####################*+-========================+#########+=+:=========-      =======     .######++++=   
      -++++++########:...           *####+             ....   -##########++-                    .+################*+==========================*#########+=============     :=======      *######++++:   
      :++++++*#######*:..           -#####.             ...    -##########*.                     -=+**#########*+===========================+##########+=============-    -=======.     =######+++++    
      :+++++++*#######*...           #####+              ...    :##########*:                    =====++*####+============================+*##########+==============.   ========:    -:######*++++-    
      .+++++++++#######+..           ######.              ...    :###########+                  :========*###+=========================++###########*+===============  .========-    =+#######++++=     
      .++++-=++++*######+..          -#####=              ...     :############=:               =========*####*+===============++++**##############*================= .=========     ########*++++.     
      .+++-  =++++*######=.           +#####              ....     :#######+ :####*+=-::.      :=======++########***********######################*=================-:=========.    -#######*++++:      
       ++-    -++++*######=.           +####:              ...      :#######*..**##############################################*++*##############+============================-     *######*++++-       
       +-      :++++*######=.           *###+              ....      :########-   -##*#######################################*+===*#############+=========================-===     :######*++++-        
       -        :+++++######*:           +###               ....      .########+.  .   +####################################*===+*#############+==========================.-==     *#####*++++-         
                 :+++++######*:           =##.               ....      .*########-     .################################**##+====#############+=========================== .=:    :#####*++++-          
                  .+++++++#####=.          -#:                ....      .*########*-    ##+*############################**##===+*############+===========================.  =.    +####*++++-           
                   .+++++++#####=...        .-                 ....       =##########+-.##==+###########################***##*##############+===========================-   :.    #####++++-            
                    :+++++++*####-...                            ...       :##############====+***######################***################*============================         -####++++=             
                     .+++++++*####-...                             ...       +############==========++****###*****#####*****##############*============================:         *###*++++.             
                      :+++++++#####::...                             ..       -###########=============+***##*****************###########*=============================         -####++++=              
                       :+++++++####*-=....                             ..      .+#########===============+*##****+=====+********#########+============================         :####*++++.              
                        .+=++++*####*#-.....                             ..      =########=================+#**+=========********#######+============================.        .#####++++-               
                         ..=++++#######:.....                              .      -#######==================*============*********#####+======================-..===.        .#####*++++.               
                           .++++*######*:......                                    :######==============================**********####*====================-.   ===.        .#####*++++-                
                            -++++*#######=...... ..                                 :#####==--=========================+**********####+==================:    .==-         :######++++=                 
                             -++++*########=:.......                                 +####+=  :========================***********###+=================.     .==:         -######+++++.                 
                              -+++++#########+:........                              :####*=: .========================**********###+================-      .=:     ..   =######*++++:                  
                               :=++++*#########*-..:.....                             #####=-  -=======================*********####================.      .:      :*  .*#####**++++-                   
                                 -+++++*#########*-:+-......                          -####+=:  -=====================+*********###+===============:              -#= :#######++++==                    
                                  .-+++++*##*######*=*#=:....                          *###*==   -===========*========+********####===============-              +##.=#######++++=                      
                                    .-+++++++++*#########+:....                         *###*=-   :==========+*=======+*******####+==============:             :###########*++++=.                      
                                       :=+++++++++#########+:...                         +####+=:.  .-=======+#+======+******####*==============.            .+###########*++++=                        
                                         .: .-++++++#########*:..                         :*####+==--=========##======+*****####*=============-             -############+++++-                         
                                               :=++++*#########+:.                          :+#####*+=========##+=====****#####+============-             =############*++++=:                          
                                                 -+++++##########=.                            -*#####**+=====###====+*######*+===========-            -+############*+++++-                            
                                                  .=++++*#########*=                              -+*#####################**+===========:      .:-==+*#############*+++++=:                             
                                                    -+++++*#########*-                                :-=*############**++===========-..:-=+*####################*+++++=:                               
                                                     .-++++++*#########+-.                                   ...:.:++===========++**+*########################*++++++=:                                 
                                                       .-=+++++**##########*=-.                                    ===========+**####################**+*##*++++++=-.                                   
                                                          :=+++++++*############*+-:                               :.-===++**################***++++++++*+++++++-.                                      
                                                             :=+++++++**##############*=-:.     :==--::.            :++*##########****++++++++++++++++++++++=-.                                         
                                                                :-++++++++**################*=-: .+#######*=-    .-+#########**+++++++++++++++++++++++++=-:.                                            
                                                                   .:=++++++++++****##############**##########*+#########**+++++++++=--:::.. .=+++++=-:                                                 
                                                                       .:-=++++++++++++++++****#######################*+++++++=-:.          .=+=-:.                                                     
                                                                            ..:--==+++++++++++++++++**##############*++++++=:              .:.                                                          
                                                                                     ...::--==+++++++++++**#######++++++=:                                                                              
                                                                                               ..:-==+++++++*##*++++++-.                                                                                
                                                                                                      .:=++++++++++=:                                                                                   
                                                                                                         :=++++++=:                                                                                     
                                                                                                           .---:.                                                                                      
`

# KS MVR GDTF
 MVR and GDTF related documentation and projects

 (Work in progress...)

 ## What?

 **MVR**, My Virtual Rig, is a file that contains information about a stage setup. This means the scene objects that are present and there location. Objects can be fixtures, trusses, video screens, scenery and others. 

 A MVR file is a zipped file. This zip file contains GeneralSceneDescription.xml, a file in xml format. This file contains the complete scenery description. The zip file als contains GDTF, 3ds, glb, image assets, this are the different elements on the stage, that are referenced in GeneralSceneDescription.xml.

**GDTF**, General Device Type Format, is a zip file that contains information about one lighting fixture. 

a GDTF file is a zipped file. This zip file contains description.xml, a file in xml format. This file contains the complete fixture description. The zip file also contains models(3ds, glb, svg), wheels images, generic images, this are the different elements of the fixture, that are referenced in description.xml.

**DMX**, Digital MultipleX, is a RS485 signal standard that is used to transfer light console output to fixtures. It can transfer maximum 512 byte values 44 times/second. The meaning of the bytes is not specified in de DMX standard, they
are just bytes.

One DMX output, with maximum 512 bytes, is also called one DMX Universe. When a lighting controller has multiple DMX outputs, it will have multiple DMX Universes.

In most cases there are multiple fixtures connected to one DMX Output/Universe. Each fixture gets a so called DMX Start Address. This is just a number from 1 tot 512. When a fixture has DMX Start Address 1, it will use the first DMX byte as the first DMX value it will use. It depends one the fixtures channel needs, how many DMX address it will us(see example). When a fixture has DMX Start Address 20, it will use the twenties DMX byte as the first DMX value it will use. In most cases each fixture assigned to a DMX Output/Universe is assigned a different DMX Start Address. This way each fixture can use it's own set from the 512 DMX Channels.

***Example:***

>Fixture 1: DMX Start Address 1, uses 6 DMX Channels for its 6 dimmer channels, so DMX Address 1 to 6
>
>Fixture 2: DMX Start Address 7, uses 4 DMX Channels for its RGBW color channels, so DMX Address 7 to 10
>
>Fixture 3: DMX Start Address 11, uses 9 DMX Channels for its dimmer/pan/tilt/gobo/strobe channels, so DMX Address 11 to 19
>
>Fixture 4: DMX Start Address 20, uses 9 DMX Channels for its dimmer/pan/tilt/gobo/strobe channels, so DMX Address 20 to 28

For each specific fixture the meaning of the DMX Channels is present in the GDTF.

***Example:***

>The GDTF for fixture 2 in previous example can contain:
>
>DMX Channel 1: RED
>
>DMX Channel 2: GREEN
>
>DMX Channel 3: BLUE
>
>DMX Channel 4: WHITE
>
>Will be in a specific xml format, like this

    <DMXChannels>
        <DMXChannel Offset="1" Default="255/1" Highlight="255/1" Geometry="Beam">
            <LogicalChannel Attribute="ColorAdd_R">
                <ChannelFunction Attribute="ColorAdd_R" DMXFrom="0/1" />
            </LogicalChannel>
        </DMXChannel>
        <DMXChannel Offset="2" Default="255/1" Highlight="255/1" Geometry="Beam">
            <LogicalChannel Attribute="ColorAdd_G">
                <ChannelFunction Attribute="ColorAdd_G" DMXFrom="0/1" />
            </LogicalChannel>
        </DMXChannel>
        <DMXChannel Offset="3" Default="255/1" Highlight="255/1" Geometry="Beam">
            <LogicalChannel Attribute="ColorAdd_B">
                <ChannelFunction Attribute="ColorAdd_B" DMXFrom="0/1" />
            </LogicalChannel>
        </DMXChannel>
        <DMXChannel Offset="4" Default="255/1" Highlight="255/1" Geometry="Beam">
            <LogicalChannel Attribute="ColorAdd_W">
                <ChannelFunction Attribute="ColorAdd_W" DMXFrom="0/1" />
            </LogicalChannel>
        </DMXChannel>
    </DMXChannels>

The GDTF is needed to understand the meaning of each DMX Channel, what does it do. 

**Art-Net**

Art-Net, developed by Artistic Licence, is a protocol that allows DMX Universe to be send on IP/UDP. This allows to sending multiple universe on one cable. Each ArtDMX packet will contain up to 512 DMX Channels. 

Art-Net also support discovery of Art-Net devices, RDM, Syncing and more.

**sACN**

sACN, Streaming ACN, is also a protocol that allows DMX Universe to be send on IP/UDP.

## Links to MVR and GDTF official sites

GDTF Share: https://gdtf-share.com/ 

GDTF.EU: https://gdtf.eu/

## Links to info about DMX

ESTA: https://tsp.esta.org/tsp/documents/published_docs.php (ANSI E1.11 - 2008 (R2018)
Entertainment Technology -- USITT DMX512-A, Asynchronous Serial Digital Data Transmission Standard for Controlling Lighting Equipment and Accessories)

Wikipedia: https://en.wikipedia.org/wiki/DMX512

DMX Signals: https://www.youtube.com/watch?v=akv9MLvdZEM

Vectorworks: https://www.youtube.com/watch?v=vi6hHx2tgw8

## Art-Net and SACN

Art-Net: https://artisticlicence.com/WebSiteMaster/User%20Guides/art-net.pdf

sACN: https://tsp.esta.org/tsp/documents/published_docs.php (ANSI E1.31 - 2018)

Art-Net and sACN: https://www.youtube.com/watch?v=OwzVgKEMs0Q

Updated Art-Net and sACN: https://www.youtube.com/watch?v=WLoaaZa5vn8

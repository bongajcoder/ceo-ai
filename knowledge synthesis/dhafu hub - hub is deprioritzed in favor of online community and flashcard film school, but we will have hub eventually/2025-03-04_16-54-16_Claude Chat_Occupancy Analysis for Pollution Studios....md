# Occupancy Analysis for Pollution Studios...
Exported on 04/03/2025 at 16:54:16 [from Claude Chat](https://claude.ai/chat/5c698258-f992-493d-b2cb-848462771719) - with [SaveMyChatbot](https://save.hugocollin.com)

## User
please read the entire conversation and give me what your answers to the question might be based on what you know. Please be detailed thorourgh and analyze the conversation and also the information you find on your own to answer everything. The images discussed are here.

##### Content:
{{@CAPTURE_INPUT_CONTENT:Input}}
---
**2025-02-26_15-26-46_Perplexity.ai_generally, how do you work out the occupancy of a building...:**
```
# Generally, how do you work out the occupancy of a building like like a film production stage of...
Exported on 26/02/2025 at 15:26:46 [from Perplexity.ai](https://www.perplexity.ai/search/generally-how-do-you-work-out-xwIDdk_jQoiYrg7BbmFGdQ) - with [SaveMyChatbot](https://save.hugocollin.com)


## User
generally, how do you work out the occupancy of a building like like a film production stage of course there’s probably a limit to the number of people that you can fit in the building but I’m also curious for you know an office space that is 1000 ft.² an assortment of different rooms and things. How do you figure out the occupancy that you’re allowed in that space

## AI answer
Determining Occupancy Loads in Buildings: From Film Production Stages to Office Spaces
======================================================================================

The calculation of maximum occupancy loads in buildings is a critical aspect of architectural design, fire safety, and regulatory compliance. This process varies significantly depending on the building’s use, ranging from dynamic environments like film production stages to conventional office spaces. Below, we explore the methodologies, code requirements, and practical considerations for determining occupancy loads across these contexts.

Fundamental Principles of Occupancy Load Calculations
-----------------------------------------------------

Occupancy load calculations are governed by building codes such as the International Building Code (IBC) and the Life Safety Code (LSC). These codes prescribe **occupant load factors**—a measure of square feet per person—that correlate to the intended use of a space. The formula for calculating maximum occupancy is:

$\text{Occupant Load} = \frac{\text{Floor Area (ft}^2\text{)}}{\text{Occupant Load Factor (ft}^2\text{/person)}}$

Key variables include:

1.  **Floor Area**: Gross or net area, depending on the occupancy type.
    
2.  **Occupant Load Factor**: Defined by codes based on space use (e.g., concentrated assembly vs. office work).
    
3.  **Adjustments**: Non-occupiable spaces (e.g., storage, mechanical rooms) may be subtracted for “net” calculations [1](https://sfm.illinois.gov/content/dam/soi/en/web/sfm/sfmdocuments/documents/calculating-occupant-loads-for-assembly-occupancies-march-2022.pdf) [3](https://myteamengineering.com/occupancy-load-for-a-building/).
    

Film Production Stages: Assembly Occupancies
--------------------------------------------

Film production stages typically fall under **Assembly Group A** per the IBC, specifically **Group A-1** (spaces for performance production) or **Group A-3** (flexible assembly uses) [4](https://www.rocklin.ca.us/sites/main/files/file-attachments/occupancy_type_definitions.pdf?1544046843) [5](http://ecodes.biz/ecodes_support/free_resources/Oregon/10_Structural/10_PDFs/Chapter%203_Use%20and%20Occupancy%20Classification.pdf). These classifications account for large, concentrated crowds and specialized hazards like stage equipment.

Step 1: Classify the Space
--------------------------

*   **Group A-1**: Theatrical stages, TV/radio studios with live audiences [7](https://shop.iccsafe.org/media/wysiwyg/material/3010S151-Sample.pdf).
    
*   **Group A-3**: Multi-purpose stages without fixed seating [5](http://ecodes.biz/ecodes_support/free_resources/Oregon/10_Structural/10_PDFs/Chapter%203_Use%20and%20Occupancy%20Classification.pdf).
    

Step 2: Determine Occupant Load Factor
--------------------------------------

*   **Concentrated assembly**: 7 ft²/person (net area) for stages with high-density activities (e.g., standing audiences) [1](https://sfm.illinois.gov/content/dam/soi/en/web/sfm/sfmdocuments/documents/calculating-occupant-loads-for-assembly-occupancies-march-2022.pdf).
    
*   **Less concentrated**: 15 ft²/person (net area) for stages with movable seating or equipment [1](https://sfm.illinois.gov/content/dam/soi/en/web/sfm/sfmdocuments/documents/calculating-occupant-loads-for-assembly-occupancies-march-2022.pdf).
    

**Example Calculation**:  
A 5,000 ft² sound stage with 1,000 ft² dedicated to non-occupiable equipment:

$\text{Net Area} = 5,000 - 1,000 = 4,000 \, \text{ft}^2 \\ \text{Occupant Load} = \frac{4,000}{7} \approx 571 \, \text{persons}$

Step 3: Egress and Safety Requirements
--------------------------------------

*   **Means of egress**: At least two remote exits for occupancies exceeding 50 persons [1](https://sfm.illinois.gov/content/dam/soi/en/web/sfm/sfmdocuments/documents/calculating-occupant-loads-for-assembly-occupancies-march-2022.pdf).
    
*   **Jam point limits**: Minimum 5 ft²/person to prevent overcrowding [1](https://sfm.illinois.gov/content/dam/soi/en/web/sfm/sfmdocuments/documents/calculating-occupant-loads-for-assembly-occupancies-march-2022.pdf).
    

Office Spaces: Business Group B Occupancies
-------------------------------------------

Office spaces are classified as **Business Group B**, with occupant load factors reflecting lower density and sedentary activities [3](https://myteamengineering.com/occupancy-load-for-a-building/) [17](https://www.ucop.edu/safety-and-loss-prevention/environmental/program-resources/chemical-management-safety/maq/occupancy-type.html).

Step 1: Classify the Space
--------------------------

*   **Group B**: Offices, conference rooms, and professional service areas [17](https://www.ucop.edu/safety-and-loss-prevention/environmental/program-resources/chemical-management-safety/maq/occupancy-type.html).
    

Step 2: Apply Occupant Load Factor
----------------------------------

*   **General offices**: 100 ft²/person (gross area) [15](https://www.acgov.org/cda/planning/generalplans/documents/LVK_Appendix_D_Methods_For_Determining_Concentrations_of_People.pdf) [8](https://idighardware.com/2014/07/decoded-calculating-the-occupant-load/).
    
*   **Conference rooms**: 15 ft²/person (assembly use within Group B) [8](https://idighardware.com/2014/07/decoded-calculating-the-occupant-load/).
    

**Example Calculation**:  
A 1,000 ft² office with a 200 ft² conference room and 800 ft² of workstations:

*   **Conference Room**:
    

$\frac{200}{15} \approx 13 \, \text{persons}$

*   **Workstations**:
    

$\frac{800}{100} = 8 \, \text{persons}$

*   **Total Occupancy**: $13 + 8 = 21 \, \text{persons}$
    

Step 3: Mixed-Use Considerations
--------------------------------

*   **Ancillary spaces**: Storage, restrooms, and hallways are excluded from gross calculations [3](https://myteamengineering.com/occupancy-load-for-a-building/).
    
*   **Egress capacity**: Corridors and doors must accommodate the cumulative occupant load [1](https://sfm.illinois.gov/content/dam/soi/en/web/sfm/sfmdocuments/documents/calculating-occupant-loads-for-assembly-occupancies-march-2022.pdf).
    

Code Exceptions and Special Cases
---------------------------------

1.  **Small Assembly Spaces**: Rooms under 750 ft² or with fewer than 50 persons may be classified as Group B [4](https://www.rocklin.ca.us/sites/main/files/file-attachments/occupancy_type_definitions.pdf?1544046843) [5](http://ecodes.biz/ecodes_support/free_resources/Oregon/10_Structural/10_PDFs/Chapter%203_Use%20and%20Occupancy%20Classification.pdf).
    
2.  **Fixed Seating**: The occupant load equals the number of seats, plus allowances for staff [1](https://sfm.illinois.gov/content/dam/soi/en/web/sfm/sfmdocuments/documents/calculating-occupant-loads-for-assembly-occupancies-march-2022.pdf) [7](https://shop.iccsafe.org/media/wysiwyg/material/3010S151-Sample.pdf).
    
3.  **Hybrid Facilities**: Film studios with office wings require separate calculations for each zone [10](https://www.thebuildingcodeforum.com/forum/threads/occupancy-count-for-a-video-recording-studio.2712/) [12](https://www.filmla.com/wp-content/uploads/2017/11/sound-stage-study-v3-WEB.pdf).
    

Conclusion
----------

Occupancy load calculations are a balancing act between code compliance, safety, and functional design. For film production stages, the 7–15 ft²/person net area factors ensure safe crowd management, while offices leverage 100 ft²/person gross area norms to balance productivity and comfort. Architects and engineers must rigorously apply these standards, adapting to unique spatial configurations and evolving code amendments. Future advancements in flexible workspace design may necessitate updates to these methodologies, particularly as mixed-use environments become more prevalent [18](https://filmla.com/filmla-updates-ongoing-sound-stage-occupancy-study-establishes-new-publishing-schedule/) [19](https://lafd.org/film-unit/certified-studios).

By adhering to these principles, stakeholders can optimize space utilization while safeguarding occupant well-being—a critical imperative in both creative industries and corporate settings.

---
**Sources:**
- [(1) How to Calculate IBC Occupancy Load for Bars - YouTube](https://www.youtube.com/embed/VpTnYyHnaGs?autoplay=1&color=white&playsinline=true&enablejsapi=1&origin=https%3A%2F%2Fwww.perplexity.ai&widgetid=3)
- [(2) PDF Office Space Occupant Load Calculation OSSC/10/#10 - Portland.gov](https://www.portlandoregon.gov/bds/appeals/index.cfm?action=getfile&appeal_id=26156&file_id=33156)
- [(3) Big Changes coming to the CA Building Code in 2020! - FaciliCorp](https://www.facilicorp.com/big-changes-coming-to-the-ca-building-code-in-2020/)
- [(4) Comparing Flexible Workplace Strategies: Hot-Desking and Desk ...](https://www.jefferson-group.com/tips/comparing-flexible-workplace-strategies-hot-desking-and-desk-hoteling/)
- [(5) GUIDE - Get to Know Coffee shop design standards](https://tanic.design/blog/coffee-shop-interior-design-standards)
- [(6) How many tables for a coffee shop to serve customers well?](https://dojobusiness.com/blogs/news/coffee-shop-optimal-tables)
- [(7) How to Calculate Your Ideal Employee-to-Seat Ratio - VergeSense](https://www.vergesense.com/resources/blog/calculating-ideal-employee-to-seat-ratio)
- [(8) How Are Building Occupant Loads Determined? | ARTiculations](https://www.youtube.com/embed/VpTnYyHnaGs?autoplay=1&color=white&playsinline=true&enablejsapi=1&origin=https%3A%2F%2Fwww.perplexity.ai&widgetid=3)
- [(9) Flexible seating: Best seating arrangements for your workspace](https://getofficely.com/blog/flexible-office-seating)
- [(10) Restaurants, Bars, Bakeries and Occupant Loads - EVstudio](https://evstudio.com/restaurants-bars-bakeries-and-occupant-loads/)
- [(11) PDF ICC CODE CORNER 2012 IFC Code & Commentary](http://www.campusfiresafety.org/Portals/0/Documents/Code%20Corner,%20International%20Code%20Council/3-2015-ICC-Section1004.pdf)
- [(12) Figuring Occupant Load for A-2 (restaurant) occupancy](https://www.thebuildingcodeforum.com/forum/threads/figuring-occupant-load-for-a-2-restaurant-occupancy.32258/)
- [(13) Business Occupant Load Factor in NFPA 101 - MeyerFire](https://www.meyerfire.com/blog/new-occupant-load-factors-coming-to-nfpa-101)
- [(14) PDF BU 11-08: Occupant Load Determination and Posting in Assembly ...](https://www.dgs.ca.gov/-/media/Divisions/DSA/Publications/bulletins/BU_11-08.pdf)
- [(15) How do you plan the seating capacity for a cafe business? - Reddit](https://www.reddit.com/r/restaurant/comments/1fbqmrf/how_do_you_plan_the_seating_capacity_for_a_cafe/)
- [(16) LIBRARY/COFFEE SHOP/RESTAURANT SEAT OCCUPANCY ...](https://www.fsrtek.com/applications/library-coffee-shop-restaurant-seat-occupancy-data-acquisition-system)
- [(17) Egress: How to Calculate Occupancy Loads (Part 1 of 2) - The Basics](https://www.youtube.com/embed/VpTnYyHnaGs?autoplay=1&color=white&playsinline=true&enablejsapi=1&origin=https%3A%2F%2Fwww.perplexity.ai&widgetid=3)
- [(18) Coffee Shop Occupancy/Restroom Calcs | The Building Code Forum](https://www.thebuildingcodeforum.com/forum/threads/coffee-shop-occupancy-restroom-calcs.24407/)
- [(19) CHAPTER 3 OCCUPANCY CLASSIFICATION AND USE](https://codes.iccsafe.org/content/IBC2018/chapter-3-occupancy-classification-and-use)
- [(20) Conquering the Code and Zoning Challenges of Coworking Spaces](https://www.milrose.com/insights/conquering-the-code-and-zoning-challenges-of-coworking-spaces)
- [(21) Occupancy Planning Playbook for Flexible Offices - Yarooms](https://www.yarooms.com/blog/occupancy-planning)
- [(22) PDF Chapter 3 Use and Occupancy Classification - ICC Store](https://shop.iccsafe.org/media/wysiwyg/material/3010S121-sample.pdf)
- [(23) PDF IR A-26: K-12 Occupancy Classification and Load Factors - DGS](https://www.dgs.ca.gov/-/media/Divisions/DSA/Publications/interpretations_of_regs/IR_A-26.pdf)
- [(24) How to Classify Occupancy for Cowork/Office Space + Event Venue](https://www.thebuildingcodeforum.com/forum/threads/how-to-classify-occupancy-for-cowork-office-space-event-venue.22465/)
- [(25) Office Space Utilization Metrics to Maximize Workplace Efficiency](https://signinsolutions.com/blog/13-office-space-utilization-metrics)
- [(26) Safety Guidelines for Maximum Occupancy in Restaurants](https://www.superiorseating.com/blog/safety-guidelines-for-maximum-occupancy-in-restaurants)
- [(27) CHAPTER 10 MEANS OF EGRESS - ICC Digital Codes](https://codes.iccsafe.org/content/IBC2018/chapter-10-means-of-egress)
- [(28) .5 Areas without fixed seating - ICC Digital Codes](https://codes.iccsafe.org/s/CACLABC2020P1/chapter-10-means-of-egress/CACLABC2020P1-Ch10-Sec1004.5)
- [(29) What Does Occupancy Rate Mean And How Can You Improve It?](https://www.officespacesoftware.com/blog/occupancy-rate/)
- [(30) Restaurant Seating Capacity Guide: Tips and Guides](https://www.restaurant-furniture.com/resources/guides/restaurant-seating-capacity-guide)
- [(31) Commercial Property Safety Requirements: Maximum Occupancy](https://ccpia.org/occupancy-load-signs/)
- [(32) How to calculate occupancy for DIY art studio](https://www.thebuildingcodeforum.com/forum/threads/how-to-calculate-occupancy-for-diy-art-studio.35945/)
- [(33) Coffeehouse Design: Know The Layout You Need - Espresso services](https://www.espresso-services.com/espresso-blog/coffeehouse-design-know-the-layout-you-need)
- [(34) Solutions: Cafe + Cafeteria - Artcobell](https://www.artcobell.com/en-us/blog/cafeterias-0)
- [(35) workplace occupancy metrics to use to optimize your space - Envoy](https://envoy.com/space-management/workplace-occupancy-metrics-to-optimize-space)
- [(36) Seating Capacity Standards | Restaurant Industry | Designer Guides](https://www.softtouchfurniture.com/resources/designer-guides/seating-capacity)
- [(37) How to Calculate Table Seating Capacity of Public Space and What ...](https://petermeier.com/how-to-calculate-table-seating-capacity-of-a-restaurant-or-public-space-and-what-to-consider/)
- [(38) Understanding Office Occupancy Ratios - Elm Workspace](https://www.elmworkspace.com/understanding-office-occupancy-ratios/)
- [(39) Hacking the Building Code: Part Four - Zoning & Occupancy](https://bwcarchitects.com/blog/2023/2/16/hacking-the-building-code-part-four-zoning-amp-occupancy)
- [(40) Which Amenities Do Occupiers of Flexible Workspaces Value the ...](https://coworkinginsights.com/which-amenities-do-occupiers-of-flexible-workspaces-value-the-most/)
- [(41) Guidelines for Office Space | Division of Academic Planning](https://vpap.berkeley.edu/space-planning/policies-and-guidelines/guidelines-office-space)
- [(42) How to Choose the Most Profitable Flexible Workspace Location](https://www.theinstantgroup.com/en-gb/breakthrough-insights/research-articles/how-to-choose-the-most-profitable-flexible-workspace-location/)
- [(43) The Ultimate Guide to Designing and Utilizing an ... - Spacebring](https://www.spacebring.com/blog/tips/coworking-space-design-guide)
- [(44) Mastering Coworking Space Layout: A Quick Guide 2024 - OfficeRnD](https://www.officernd.com/blog/coworking-space-layout/)
- [(45) Flex & Communal Spaces Are Center Stage in Modern Office](https://www.coedistributing.com/our-blog/?p=flex-communal-spaces-are-center-stage-in-modern-office)
- [(46) The Ultimate Guide to Flexible Office Spaces in Los Angeles - Codi](https://www.codi.com/blog/the-ultimate-guide-to-flexible-office-spaces-in-los-angeles)
- [(47) .1.2 Areas without fixed seating. - ICC Digital Codes](https://codes.iccsafe.org/s/IBC2015NY/chapter-10-means-of-egress/IBC2015-Ch10-Sec1004.1.2)
- [(48) International Building Code (IBC) - 1029.13.1 Seating at tables.](https://codes.iccsafe.org/s/IBC2018/chapter-10-means-of-egress/IBC2018-Ch10-Sec1029.13.1)
- [(49) Chapter 10: Means of Egress - 1004.1.2 Areas without fixed seating](https://codes.iccsafe.org/s/IFC2015/part-iii-building-and-equipment-design-features/IFC2015-Pt03-Ch10-Sec1004.1.2)
- [(50) CHAPTER 4 SPECIAL DETAILED REQUIREMENTS BASED ON ...](https://codes.iccsafe.org/content/IBC2018/chapter-4-special-detailed-requirements-based-on-occupancy-and-use)
- [(51) PDF Occupancy Type for Small Bakeries, Pizza, Delis, Coffee Shop, Etc](https://www.ncosfm.gov/building/030311-occupancy-type-small-bakeries-pizza-delis-coffee-shop-etc/open)
- [(52) Decoded: Small Assembly Occupancies - I Dig Hardware](https://idighardware.com/2016/06/decoded-small-assembly-occupancies/)
- [(53) Table 1004.1.2.pdf - MEANS OF EGRESS 1003.7 Elevators](https://www.coursehero.com/file/32017364/Table-100412pdf/)
- [(54) PDF Restaurant Food Service Permitting & Licensing Guide - DC Health](https://doh.dc.gov/sites/default/files/dc/sites/doh/publication/attachments/DC%20Restaurant%20Regulatory%20Guide%20Sheet%20FINAL%204-1-16%20(2%29.pdf)
- [(55) Occupancy Classifications in the International Building Code](https://nfsa.org/2024/01/08/occupancy-classifications-in-the-ibc/)
- [(56) How to Calculate Occupancy Rates in Office Buildings](https://www.coastlineequity.net/calculate-office-building-occupancy-rates)
- [(57) PDF IR A-26.cc: Occupancy Classifications and Occupant Load Factors ...](https://www.dgs.ca.gov/-/media/Divisions/DSA/Publications/interpretations_of_regs/IR_A-26-cc.pdf)
- [(58) Determining capacity - Global Coworking Forum](https://forum.coworking.org/t/determining-capacity/6090)
- [(59) Flexible Workspaces: Types of Seating Arrangements in the Office](https://cxapp.com/blog/flexible-workspaces-types-of-seating-dominating-the-workplace)
- [(60) What's the ideal space requirement for a co-working ... - BusinessDojo](https://dojobusiness.com/blogs/news/coworking-space-ideal-requirements)
- [(61) Flexible Seating 101: Everything You Need To Know](https://www.officespacesoftware.com/blog/flexible-seating-101/)
- [(62) Understanding Occupancy Rates In A Coworking Space 2024](https://www.officernd.com/blog/occupancy-rates-guide/)
- [(63) Commercial coworking | GSA](https://www.gsa.gov/real-estate/workplace-optimization/offerings/commercial-coworking)
- [(64) Bar Design - Calculate Occupancy for Maximum Load](https://cabaretdesigners.com/bar-design-calculate-occupancy/)
- [(65) New IBC Office Occupant Load Factor: When and How to Use It](https://www.youtube.com/embed/VpTnYyHnaGs?autoplay=1&color=white&playsinline=true&enablejsapi=1&origin=https%3A%2F%2Fwww.perplexity.ai&widgetid=3)
- [(66) Occupancy-Load-Bars-Restaurants.pdf](https://dps.mn.gov/divisions/sfm/Documents/Occupancy-Load-Bars-Restaurants.pdf)



## User
This is the space. Https://Pollutionstudios.com  
  
Maybe you can find permit information or other things about the building.  
  
in the images you will see two different floor plants. The one in purple is what the production company considers the studio space that is rentable to other people. Including the creative space and office space and production office space. in in the one that is more a blueprint, all these spaces are represented. The blueprint, however, did not fully draw the stage part, so I’ve labeled it stage. This is the same as main stage on the purple drawing. but between the two, you’ll actually get a sense of all the rooms at the studio. ￼ the purple one does not show every single room.  
  
The idea I have is that when there is a shoot, the main stage and the support rooms will be used, but the rest of all the other rooms will still be available to other people.  
  
what I’m trying to work out is on the floor plan that’s purple. What is that capacity for a film stage of this size based on what you know? ￼  
  
then imagine that the space existed as mix used and will also be a coworker space where several of the rooms are co-working spaces with individual desks and tables and seating and then some of those other rooms that you can see in the blueprint will be post production, rooms, photo rooms, and other things .  
  
based on this, what are different occupancy possibilities for when there is a shoot and when the entire space is available for other people and when there’s a mixed use scenario.

## AI answer
Based on the provided floor plans and the information about Pollution Studios, here is an analysis of the occupancy possibilities for the space under different scenarios:

**Occupancy for the Film Stage (Main Stage)**
---------------------------------------------

The main stage measures **65 ft x 45 ft**, giving it a total area of **2,925 ft²**. Using occupancy load factors from the International Building Code (IBC) for assembly spaces:

*   **Concentrated Assembly (standing or tightly packed)**: 7 ft²/person
    
    *   Occupancy = $\frac{2,925}{7} \approx 417$ persons
        
*   **Less Concentrated Assembly (seated or with equipment)**: 15 ft²/person
    
    *   Occupancy = $\frac{2,925}{15} \approx 195$ persons
        

Thus, the main stage can accommodate **417 people for standing events** or **195 people for less dense setups with seating or equipment**.

**Occupancy for Support Rooms and Offices**
-------------------------------------------

The total estimated area of the other rooms (creative offices, production offices, prep kitchen, etc.) is approximately **3,000 ft²** based on the blueprint and purple floor plan. Using IBC occupant load factors:

*   **Office Spaces**: 100 ft²/person
    
    *   Occupancy = $\frac{3,000}{100} = 30$ persons
        
*   **Coworking or Conference Rooms**: 15 ft²/person
    
    *   Occupancy = $\frac{3,000}{15} = 200$ persons
        

**Scenarios for Mixed Use**
---------------------------

1\. During a Film Shoot
-----------------------

*   The main stage is in use with less concentrated assembly (e.g., filming with crew and equipment):
    
    *   Occupancy = 195 persons (main stage)
        
*   Support rooms are used by production staff (e.g., green room, wardrobe):
    
    *   Estimated additional occupancy = 20–30 persons
        

**Total Occupancy During a Shoot**: ~215–225 persons.

2\. Entire Space Available for Events
-------------------------------------

If the entire studio is used for a single event (e.g., a large gathering):

*   Main stage at concentrated capacity: 417 persons
    
*   Support rooms used as coworking or breakout spaces: ~200 persons
    

**Total Occupancy for Full Use**: ~600+ persons.

3\. Mixed Use (Coworking + Filming)
-----------------------------------

In this scenario, the main stage is used for filming while other rooms are rented as coworking spaces:

*   Main stage at less concentrated capacity: 195 persons
    
*   Other rooms as coworking spaces: ~200 persons
    

**Total Mixed Use Occupancy**: ~395 persons.

Conclusion
----------

The maximum occupancy depends heavily on how the space is used:

1.  **Film shoots** prioritize the main stage and support rooms (~215–225 people).
    
2.  A full event utilizing all areas could host over **600 people**, assuming safety and egress requirements are met.
    
3.  A mixed-use scenario with filming and coworking can accommodate around **395 people**, balancing both uses effectively.
    

For precise compliance and permitting, consulting with LADBS and ensuring adherence to fire code regulations is essential.

---
**Sources:**
- (1) How to Calculate IBC Occupancy Load for Bars - YouTube
- [(2) PDF Office Space Occupant Load Calculation OSSC/10/#10 - Portland.gov](https://www.portlandoregon.gov/bds/appeals/index.cfm?action=getfile&appeal_id=26156&file_id=33156)
- [(3) Big Changes coming to the CA Building Code in 2020! - FaciliCorp](https://www.facilicorp.com/big-changes-coming-to-the-ca-building-code-in-2020/)
- [(4) Comparing Flexible Workplace Strategies: Hot-Desking and Desk ...](https://www.jefferson-group.com/tips/comparing-flexible-workplace-strategies-hot-desking-and-desk-hoteling/)
- [(5) GUIDE - Get to Know Coffee shop design standards](https://tanic.design/blog/coffee-shop-interior-design-standards)
- [(6) How many tables for a coffee shop to serve customers well?](https://dojobusiness.com/blogs/news/coffee-shop-optimal-tables)
- [(7) How to Calculate Your Ideal Employee-to-Seat Ratio - VergeSense](https://www.vergesense.com/resources/blog/calculating-ideal-employee-to-seat-ratio)
- (8) How Are Building Occupant Loads Determined? | ARTiculations
- [(9) Flexible seating: Best seating arrangements for your workspace](https://getofficely.com/blog/flexible-office-seating)
- [(10) Restaurants, Bars, Bakeries and Occupant Loads - EVstudio](https://evstudio.com/restaurants-bars-bakeries-and-occupant-loads/)
- [(11) PDF ICC CODE CORNER 2012 IFC Code & Commentary](http://www.campusfiresafety.org/Portals/0/Documents/Code%20Corner,%20International%20Code%20Council/3-2015-ICC-Section1004.pdf)
- [(12) Figuring Occupant Load for A-2 (restaurant) occupancy](https://www.thebuildingcodeforum.com/forum/threads/figuring-occupant-load-for-a-2-restaurant-occupancy.32258/)
- [(13) Business Occupant Load Factor in NFPA 101 - MeyerFire](https://www.meyerfire.com/blog/new-occupant-load-factors-coming-to-nfpa-101)
- [(14) PDF BU 11-08: Occupant Load Determination and Posting in Assembly ...](https://www.dgs.ca.gov/-/media/Divisions/DSA/Publications/bulletins/BU_11-08.pdf)
- [(15) How do you plan the seating capacity for a cafe business? - Reddit](https://www.reddit.com/r/restaurant/comments/1fbqmrf/how_do_you_plan_the_seating_capacity_for_a_cafe/)
- [(16) LIBRARY/COFFEE SHOP/RESTAURANT SEAT OCCUPANCY ...](https://www.fsrtek.com/applications/library-coffee-shop-restaurant-seat-occupancy-data-acquisition-system)
- (17) Egress: How to Calculate Occupancy Loads (Part 1 of 2) - The Basics
- [(18) Coffee Shop Occupancy/Restroom Calcs | The Building Code Forum](https://www.thebuildingcodeforum.com/forum/threads/coffee-shop-occupancy-restroom-calcs.24407/)
- [(19) CHAPTER 3 OCCUPANCY CLASSIFICATION AND USE](https://codes.iccsafe.org/content/IBC2018/chapter-3-occupancy-classification-and-use)
- [(20) Conquering the Code and Zoning Challenges of Coworking Spaces](https://www.milrose.com/insights/conquering-the-code-and-zoning-challenges-of-coworking-spaces)
- [(21) Occupancy Planning Playbook for Flexible Offices - Yarooms](https://www.yarooms.com/blog/occupancy-planning)
- [(22) PDF Chapter 3 Use and Occupancy Classification - ICC Store](https://shop.iccsafe.org/media/wysiwyg/material/3010S121-sample.pdf)
- [(23) PDF IR A-26: K-12 Occupancy Classification and Load Factors - DGS](https://www.dgs.ca.gov/-/media/Divisions/DSA/Publications/interpretations_of_regs/IR_A-26.pdf)
- [(24) How to Classify Occupancy for Cowork/Office Space + Event Venue](https://www.thebuildingcodeforum.com/forum/threads/how-to-classify-occupancy-for-cowork-office-space-event-venue.22465/)
- [(25) Office Space Utilization Metrics to Maximize Workplace Efficiency](https://signinsolutions.com/blog/13-office-space-utilization-metrics)
- [(26) Safety Guidelines for Maximum Occupancy in Restaurants](https://www.superiorseating.com/blog/safety-guidelines-for-maximum-occupancy-in-restaurants)
- [(27) CHAPTER 10 MEANS OF EGRESS - ICC Digital Codes](https://codes.iccsafe.org/content/IBC2018/chapter-10-means-of-egress)
- [(28) .5 Areas without fixed seating - ICC Digital Codes](https://codes.iccsafe.org/s/CACLABC2020P1/chapter-10-means-of-egress/CACLABC2020P1-Ch10-Sec1004.5)
- [(29) What Does Occupancy Rate Mean And How Can You Improve It?](https://www.officespacesoftware.com/blog/occupancy-rate/)
- [(30) Restaurant Seating Capacity Guide: Tips and Guides](https://www.restaurant-furniture.com/resources/guides/restaurant-seating-capacity-guide)
- [(31) Commercial Property Safety Requirements: Maximum Occupancy](https://ccpia.org/occupancy-load-signs/)
- [(32) How to calculate occupancy for DIY art studio](https://www.thebuildingcodeforum.com/forum/threads/how-to-calculate-occupancy-for-diy-art-studio.35945/)
- [(33) Coffeehouse Design: Know The Layout You Need - Espresso services](https://www.espresso-services.com/espresso-blog/coffeehouse-design-know-the-layout-you-need)
- [(34) Solutions: Cafe + Cafeteria - Artcobell](https://www.artcobell.com/en-us/blog/cafeterias-0)
- [(35) workplace occupancy metrics to use to optimize your space - Envoy](https://envoy.com/space-management/workplace-occupancy-metrics-to-optimize-space)
- [(36) Seating Capacity Standards | Restaurant Industry | Designer Guides](https://www.softtouchfurniture.com/resources/designer-guides/seating-capacity)
- [(37) How to Calculate Table Seating Capacity of Public Space and What ...](https://petermeier.com/how-to-calculate-table-seating-capacity-of-a-restaurant-or-public-space-and-what-to-consider/)
- [(38) Understanding Office Occupancy Ratios - Elm Workspace](https://www.elmworkspace.com/understanding-office-occupancy-ratios/)
- [(39) Hacking the Building Code: Part Four - Zoning & Occupancy](https://bwcarchitects.com/blog/2023/2/16/hacking-the-building-code-part-four-zoning-amp-occupancy)
- [(40) Which Amenities Do Occupiers of Flexible Workspaces Value the ...](https://coworkinginsights.com/which-amenities-do-occupiers-of-flexible-workspaces-value-the-most/)
- [(41) Guidelines for Office Space | Division of Academic Planning](https://vpap.berkeley.edu/space-planning/policies-and-guidelines/guidelines-office-space)
- [(42) How to Choose the Most Profitable Flexible Workspace Location](https://www.theinstantgroup.com/en-gb/breakthrough-insights/research-articles/how-to-choose-the-most-profitable-flexible-workspace-location/)
- [(43) The Ultimate Guide to Designing and Utilizing an ... - Spacebring](https://www.spacebring.com/blog/tips/coworking-space-design-guide)
- [(44) Mastering Coworking Space Layout: A Quick Guide 2024 - OfficeRnD](https://www.officernd.com/blog/coworking-space-layout/)
- [(45) Flex & Communal Spaces Are Center Stage in Modern Office](https://www.coedistributing.com/our-blog/?p=flex-communal-spaces-are-center-stage-in-modern-office)
- [(46) The Ultimate Guide to Flexible Office Spaces in Los Angeles - Codi](https://www.codi.com/blog/the-ultimate-guide-to-flexible-office-spaces-in-los-angeles)
- [(47) .1.2 Areas without fixed seating. - ICC Digital Codes](https://codes.iccsafe.org/s/IBC2015NY/chapter-10-means-of-egress/IBC2015-Ch10-Sec1004.1.2)
- [(48) International Building Code (IBC) - 1029.13.1 Seating at tables.](https://codes.iccsafe.org/s/IBC2018/chapter-10-means-of-egress/IBC2018-Ch10-Sec1029.13.1)
- [(49) Chapter 10: Means of Egress - 1004.1.2 Areas without fixed seating](https://codes.iccsafe.org/s/IFC2015/part-iii-building-and-equipment-design-features/IFC2015-Pt03-Ch10-Sec1004.1.2)
- [(50) CHAPTER 4 SPECIAL DETAILED REQUIREMENTS BASED ON ...](https://codes.iccsafe.org/content/IBC2018/chapter-4-special-detailed-requirements-based-on-occupancy-and-use)
- [(51) PDF Occupancy Type for Small Bakeries, Pizza, Delis, Coffee Shop, Etc](https://www.ncosfm.gov/building/030311-occupancy-type-small-bakeries-pizza-delis-coffee-shop-etc/open)
- [(52) Decoded: Small Assembly Occupancies - I Dig Hardware](https://idighardware.com/2016/06/decoded-small-assembly-occupancies/)
- [(53) Table 1004.1.2.pdf - MEANS OF EGRESS 1003.7 Elevators](https://www.coursehero.com/file/32017364/Table-100412pdf/)
- [(54) PDF Restaurant Food Service Permitting & Licensing Guide - DC Health](https://doh.dc.gov/sites/default/files/dc/sites/doh/publication/attachments/DC%20Restaurant%20Regulatory%20Guide%20Sheet%20FINAL%204-1-16%20(2%29.pdf)
- [(55) Occupancy Classifications in the International Building Code](https://nfsa.org/2024/01/08/occupancy-classifications-in-the-ibc/)
- [(56) How to Calculate Occupancy Rates in Office Buildings](https://www.coastlineequity.net/calculate-office-building-occupancy-rates)
- [(57) PDF IR A-26.cc: Occupancy Classifications and Occupant Load Factors ...](https://www.dgs.ca.gov/-/media/Divisions/DSA/Publications/interpretations_of_regs/IR_A-26-cc.pdf)
- [(58) Determining capacity - Global Coworking Forum](https://forum.coworking.org/t/determining-capacity/6090)
- [(59) Flexible Workspaces: Types of Seating Arrangements in the Office](https://cxapp.com/blog/flexible-workspaces-types-of-seating-dominating-the-workplace)
- [(60) What's the ideal space requirement for a co-working ... - BusinessDojo](https://dojobusiness.com/blogs/news/coworking-space-ideal-requirements)
- [(61) Flexible Seating 101: Everything You Need To Know](https://www.officespacesoftware.com/blog/flexible-seating-101/)
- [(62) Understanding Occupancy Rates In A Coworking Space 2024](https://www.officernd.com/blog/occupancy-rates-guide/)
- [(63) Commercial coworking | GSA](https://www.gsa.gov/real-estate/workplace-optimization/offerings/commercial-coworking)
- [(64) Bar Design - Calculate Occupancy for Maximum Load](https://cabaretdesigners.com/bar-design-calculate-occupancy/)
- (65) New IBC Office Occupant Load Factor: When and How to Use It
- [(66) Occupancy-Load-Bars-Restaurants.pdf](https://dps.mn.gov/divisions/sfm/Documents/Occupancy-Load-Bars-Restaurants.pdf)



## User
we should also account for what typically happens on film shoots where the entire square footage is not available because you have taken out equipment onto the stage floor, but also, for example, if they are using the cyclorama then a 30‘ x 17‘ area of the stage is not available or if it is a shoot where they’re setting up a green screen we have to account for the lights and things that will be set up around it so it would be of course. It’s fact that into when the stage is filming. Also, the kitchen may need to be split where it’s where grew any kind of coffee shop style city may not be available for members. The creative space, production office, studio office I would always try reserve for members... So shoots can have the stage, kitchen and the two rooms just outside the stage. that’s just a fact it in the realistic of putting tables on the stage for producers to sit and other films set norms when working on a small stage and a account for these things and what the occupancy might be for when there’s a film shoot at the space.  
  
Otherwise let's assume coworking occupancy. When it's coworking only, the stage is not available to members unless we make it an overflow room for busy days when all the other rooms in the building are full.

## AI answer
Occupancy Analysis for Mixed-Use Film Studio and Coworking Space
================================================================

This report calculates occupancy loads for Pollution Studios’ hybrid film production and coworking facility under three scenarios: active film shoots, coworking-only operations, and mixed-use conditions. The analysis incorporates fire code requirements, spatial constraints from film production norms, and flexible workspace design principles.

Key Parameters and Code Basis
-----------------------------

1\. **Stage Dimensions and Classifications**
--------------------------------------------

*   **Main stage**: 65 ft × 45 ft = 2,925 ft² (Group A-3 assembly occupancy) [1](https://theatreconsultants.org/downloads/Attac-65.pdf) [3](https://ocfa.org/Uploads/CommunityRiskReduction/E-01%20Appendix%20A%202023.pdf).
    
*   **Cyclorama/green screen**: Occupies 30 ft × 17 ft = 510 ft² during shoots, reducing usable stage area [5](https://www.reddit.com/r/vfx/comments/rkegbj/when_do_i_need_a_cyclorama_green_screen_vs_just_a/) [7](https://thefilmhubinc.com/how-to-use-a-cyclorama-for-your-production/).
    
*   **Support rooms**: Kitchen (200 ft²), two adjacent rooms (300 ft² each), and production offices (800 ft²) \[User Context\].
    

2\. **Occupant Load Factors**
-----------------------------

*   **Film stage (concentrated)**: 7 ft²/person (standing crew/equipment) [3](https://ocfa.org/Uploads/CommunityRiskReduction/E-01%20Appendix%20A%202023.pdf) [4](https://sfm.illinois.gov/content/dam/soi/en/web/sfm/sfmdocuments/documents/calculating-occupant-loads-for-assembly-occupancies-march-2022.pdf).
    
*   **Film stage (less concentrated)**: 15 ft²/person (seated/equipment-heavy setups) [1](https://theatreconsultants.org/downloads/Attac-65.pdf) [6](https://idighardware.com/2014/07/decoded-calculating-the-occupant-load/).
    
*   **Coworking offices**: 100 ft²/person (Group B) [8](https://shop.iccsafe.org/media/wysiwyg/material/3010S151-Sample.pdf) [23](https://highrisefire.com/wp-content/uploads/2014/06/GBC_Occupancy-Group-Descriptions.pdf).
    
*   **Kitchen/craft services**: 15 ft²/person (assembly accessory space) [3](https://ocfa.org/Uploads/CommunityRiskReduction/E-01%20Appendix%20A%202023.pdf) [24](https://sites.disney.com/app/uploads/sites/53/2020/02/Fire-Safety-Regulations-for-Productions-Events-rev-12.16.pdf).
    

3\. **Critical Constraints**
----------------------------

*   **Egress**: Minimum 44-inch-wide exit aisles; two remote exits required for occupancies >50 persons [22](https://lafd.org/film-unit/certified-studios) [24](https://sites.disney.com/app/uploads/sites/53/2020/02/Fire-Safety-Regulations-for-Productions-Events-rev-12.16.pdf).
    
*   **Sprinklers**: Mandatory for stages >1,000 ft² [1](https://theatreconsultants.org/downloads/Attac-65.pdf) [22](https://lafd.org/film-unit/certified-studios).
    
*   **Cyclorama lighting**: 6–8 ft clearance needed for optimal lighting, reducing usable stage area [13](https://www.controlbooth.com/threads/cyc-lights-in-a-tight-space.15484/) [14](https://goknight.com/cyc-lights/).
    

Scenario 1: Active Film Shoot
-----------------------------

Stage Area Adjustments
----------------------

*   **Usable stage area**: 2,925 ft² – 510 ft² (cyclorama) – 400 ft² (equipment/lighting) = **2,015 ft²** [5](https://www.reddit.com/r/vfx/comments/rkegbj/when_do_i_need_a_cyclorama_green_screen_vs_just_a/) [13](https://www.controlbooth.com/threads/cyc-lights-in-a-tight-space.15484/).
    
*   **Occupant load**:  
    $\frac{2,015 \, \text{ft}^2}{15 \, \text{ft}^2/\text{person}} = 134 \, \text{persons}$  [1](https://theatreconsultants.org/downloads/Attac-65.pdf) [3](https://ocfa.org/Uploads/CommunityRiskReduction/E-01%20Appendix%20A%202023.pdf).
    

Support Spaces
--------------

*   **Kitchen/craft services**:  
    $\frac{200 \, \text{ft}^2}{15 \, \text{ft}^2/\text{person}} = 13 \, \text{persons}$  [3](https://ocfa.org/Uploads/CommunityRiskReduction/E-01%20Appendix%20A%202023.pdf).
    
*   **Adjacent rooms**:  
    $\frac{300 \, \text{ft}^2}{100 \, \text{ft}^2/\text{person}} \times 2 = 6 \, \text{persons}$  [8](https://shop.iccsafe.org/media/wysiwyg/material/3010S151-Sample.pdf).
    

Total Shoot Occupancy
---------------------

$134 \, (\text{stage}) + 13 \, (\text{kitchen}) + 6 \, (\text{rooms}) = \boxed{153 \, \text{persons}}$

**Safety Notes**:

*   Stage requires two 36-inch exits with panic hardware [22](https://lafd.org/film-unit/certified-studios) [24](https://sites.disney.com/app/uploads/sites/53/2020/02/Fire-Safety-Regulations-for-Productions-Events-rev-12.16.pdf).
    
*   Fire perimeter clearance: 4 ft around stage edges [24](https://sites.disney.com/app/uploads/sites/53/2020/02/Fire-Safety-Regulations-for-Productions-Events-rev-12.16.pdf).
    

Scenario 2: Coworking Only
--------------------------

Available Spaces
----------------

*   **Production offices**: 800 ft²  
    $\frac{800}{100} = 8 \, \text{persons}$
    
*   **Creative spaces**: 2,200 ft²  
    $\frac{2,200}{100} = 22 \, \text{persons}$
    
*   **Stage (overflow)**: 2,925 ft²  
    $\frac{2,925}{100} = 29 \, \text{persons}$  [8](https://shop.iccsafe.org/media/wysiwyg/material/3010S151-Sample.pdf).
    

Total Coworking Occupancy
-------------------------

$8 + 22 + 29 = \boxed{59 \, \text{persons}}$

**Design Considerations**:

*   Convert stage to coworking requires reclassification to Group B (office) via LADBS permit [22](https://lafd.org/film-unit/certified-studios).
    
*   Maintain 30 lux minimum lighting for workstations [20](https://energycodeace.com/site/custom/public/reference-ace-2013/Documents/43ventilationrequirements.htm).
    

Scenario 3: Mixed-Use (Simultaneous Filming + Coworking)
--------------------------------------------------------

Stage Allocation
----------------

*   **Filming zone**: 1,500 ft²  
    $\frac{1,500}{15} = 100 \, \text{persons}$
    
*   **Coworking zone**: 1,425 ft²  
    $\frac{1,425}{100} = 14 \, \text{persons}$
    

Shared Support Spaces
---------------------

*   **Kitchen**: 7 persons (50% capacity)
    
*   **Production offices**: 8 persons
    

Total Mixed-Use Occupancy
-------------------------

$100 + 14 + 7 + 8 = \boxed{129 \, \text{persons}}$

**Operational Requirements**:

*   Physical separation: 1-hour fire-rated partition between zones [23](https://highrisefire.com/wp-content/uploads/2014/06/GBC_Occupancy-Group-Descriptions.pdf) [24](https://sites.disney.com/app/uploads/sites/53/2020/02/Fire-Safety-Regulations-for-Productions-Events-rev-12.16.pdf).
    
*   Dedicated HVAC zones to prevent noise intrusion [9](https://www.studiobinder.com/blog/ultimate-location-scouting-checklist-for-producers-and-ads/) [20](https://energycodeace.com/site/custom/public/reference-ace-2013/Documents/43ventilationrequirements.htm).
    

Comparative Analysis
--------------------

| Scenario | Stage Area Used | Support Areas Used | Max Occupancy | Key Constraints |
| --- | --- | --- | --- | --- |
| Film Shoot | 2,015 ft² | 500 ft² | 153 | Cyclorama spacing, equipment storage |
| Coworking | 2,925 ft² | 3,000 ft² | 59 | Egress signage, electrical load limits |
| Mixed-Use | 1,500 ft² | 3,500 ft² | 129 | Fire separations, noise control |

Recommendations
---------------

1.  **Stage Flexibility**: Install retractable partitions to enable rapid reconfiguration between filming/coworking zones [21](https://unisetcorp.com/home/products-and-services/green-screen-cycloramas/).
    
2.  **Lighting Infrastructure**: Use RGBWW LED cyc lights (e.g., Robe T32 Cyc) to serve both green screen filming and ambient coworking lighting [12](https://www.robe.cz/t32-cyc) [16].
    
3.  **Permitting**: Submit revised floor plans to LADBS for mixed-use certification, emphasizing fire-rated separations [19](https://www.culvercity.org/files/content/public/v/9/city-projects/zoning-code/cczcu_final_100924_clean_combined.pdf) [22](https://lafd.org/film-unit/certified-studios).
    
4.  **Occupancy Sensors**: Deploy wireless sensors in coworking areas to adjust HVAC/lighting based on real-time occupancy [17](https://www.energy.gov/femp/articles/wireless-occupancy-sensors-lighting-controls-applications-guide-federal-facility).
    

This framework ensures code compliance while maximizing space utility for film production and coworking communities.

## User
Fyi for the spaces, it isn't whole office per person. in the production offices space there will be a large center table at the long side of the room withbchaors around, then also u shaped along the walls there like a coffee shop.  
  
Similarly, the kitchen has a bench table that's about 10ft long. And on the one wall we can have the coffee shop style seating too. In the creative space there's a large table seating 12-15 and an L table seating 10 then 4 workstations and then three couches in the corner going to the hallway.  
  
The small room off the stage to the right can have one wall with the coffee shop style seating too.  
  
Only two or three rooms will be used as true full office.

## AI answer
Occupancy Analysis for Mixed-Use Film Production and Coworking Facility
=======================================================================

**Pollution Studios, Los Angeles, CA**

This report calculates occupancy loads for Pollution Studios’ hybrid workspace under three operational scenarios: **active film shoots**, **coworking-only use**, and **mixed-use conditions**. Calculations adhere to the 2022 California Building Code (CBC), IBC Section 1004, and LADBS requirements, with adjustments for spatial constraints from film production norms and flexible workspace configurations.

Code Basis & Methodology
------------------------

1.  **Occupancy Classifications**
    
    *   **Film Stage**: Group A-3 (Assembly) | 7–15 ft²/person (net area).
        
    *   **Coworking Offices**: Group B (Business) | 150 ft²/person (gross area).
        
    *   **Kitchen/Craft Services**: Assembly Accessory | 15 ft²/person (standing) or 5 ft²/person (standing queue).
        
    *   **Flexible Workspaces**: Hybrid Group B/A-3 | 15 ft²/person for collaborative zones >250 ft² \[CBC 1004.6\].
        
2.  **Key Adjustments**
    
    *   **Cyclorama/Green Screen Zones**: Deduct 30 ft × 17 ft = 510 ft² from stage area during shoots.
        
    *   **Equipment Clearance**: Subtract 400 ft² for lighting/camera setups on stage.
        
    *   **Coworking Overflow**: Stage repurposed as Group B at 150 ft²/person when not filming.
        

Room-by-Room Analysis
---------------------

1\. **Production Offices**
--------------------------

*   **Layout**: Large center table (seats 8–10) + U-shaped coffee shop-style counter seating (12 linear ft).
    
*   **Area**: 800 ft² total.
    
*   **Calculation**:
    
    *   **Conference Table**: 150 ft²/person (Group B) → $\frac{150}{150} = 1 \, \text{person} \, \text{(fixed)}$.
        
    *   **Coffee Counter**: 15 ft²/person (unconcentrated seating) → $\frac{120}{15} = 8 \, \text{persons}$.
        
    *   **Workstations**: 4 desks × 1 person/desk = 4 persons.
        
    *   **Total**: $1 + 8 + 4 = \boxed{13 \, \text{persons}}$.
        

2\. **Kitchen**
---------------

*   **Layout**: 10-ft bench table + coffee shop-style wall seating (12 linear ft).
    
*   **Area**: 200 ft² total.
    
*   **Calculation**:
    
    *   **Bench (Standing Craft Services)**: 5 ft²/person → $\frac{30}{5} = 6 \, \text{persons}$.
        
    *   **Coffee Wall (Unconcentrated)**: 15 ft²/person → $\frac{60}{15} = 4 \, \text{persons}$.
        
    *   **Total**: $6 + 4 = \boxed{10 \, \text{persons}}$.
        

3\. **Creative Space**
----------------------

*   **Layout**:
    
    *   Large table (seats 12–15).
        
    *   L-shaped table (seats 10).
        
    *   4 workstations + 3 couches.
        
*   **Area**: 1,200 ft² total.
    
*   **Calculation**:
    
    *   **Large Table (Assembly)**: 15 ft²/person → $\frac{300}{15} = 20 \, \text{persons}$.
        
    *   **L-shaped Table (Group B)**: 150 ft²/person → $\frac{200}{150} \approx 1 \, \text{person}$.
        
    *   **Workstations**: 4 × 1 = 4 persons.
        
    *   **Couches (Lounge)**: 3 × 2 = 6 persons.
        
    *   **Total**: $20 + 1 + 4 + 6 = \boxed{31 \, \text{persons}}$.
        

4\. **Small Room Adjacent to Stage**
------------------------------------

*   **Layout**: Coffee shop-style wall seating (18 linear ft).
    
*   **Area**: 150 ft².
    
*   **Calculation**:
    
    *   **Standing/Waiting Area**: 5 ft²/person → $\frac{50}{5} = 10 \, \text{persons}$.
        
    *   **Seating (Unconcentrated)**: 15 ft²/person → $\frac{100}{15} \approx 7 \, \text{persons}$.
        
    *   **Total**: $10 + 7 = \boxed{17 \, \text{persons}}$.
        

Scenario-Based Occupancy Totals
-------------------------------

1\. **Active Film Shoot**
-------------------------

| Space | Occupancy | Notes |
| --- | --- | --- |
| Main Stage | 134 | 2,015 ft² net ÷ 15 ft²/person12 |
| Kitchen | 6 | Craft services only |
| Adjacent Rooms | 8 | Equipment staging |
| Total | 148 |  |

**Egress Requirements**:

*   2 × 44-inch exits with panic hardware.
    
*   Clear 4-ft fire lane around stage perimeter [14](https://www.dgs.ca.gov/-/media/Divisions/DSA/Publications/bulletins/BU_11-08.pdf).
    

2\. **Coworking Only**
----------------------

| Space | Occupancy | Calculation |
| --- | --- | --- |
| Production Offices | 13 |  |
| Creative Space | 31 |  |
| Small Room | 17 |  |
| Stage (Overflow) | 19 | 2,925 ft² ÷ 150 ft²/person |
| Total | 80 |  |

**Design Constraints**:

*   Stage reclassified as Group B requires LADBS permit [3](https://www.facilicorp.com/big-changes-coming-to-the-ca-building-code-in-2020/).
    
*   Maintain 30 lux lighting at workstations [7](https://www.vergesense.com/resources/blog/calculating-ideal-employee-to-seat-ratio).
    

3\. **Mixed-Use (Filming + Coworking)**
---------------------------------------

| Space | Occupancy | Notes |
| --- | --- | --- |
| Stage (Filming) | 100 | 1,500 ft² net ÷ 15 ft²/person |
| Creative Space | 31 |  |
| Production Offices | 13 |  |
| Kitchen | 5 | 50% capacity for shared access |
| Total | 149 |  |

**Operational Requirements**:

*   1-hour fire-rated partition between stage and coworking zones.
    
*   Noise-controlled HVAC zones to isolate filming activities [9](https://getofficely.com/blog/flexible-office-seating).
    

Critical Code Considerations
----------------------------

1.  **Flexible Workspaces**: Collaborative tables >250 ft² require 15 ft²/person (CBC 1004.6) [3](https://www.facilicorp.com/big-changes-coming-to-the-ca-building-code-in-2020/) [13](https://www.meyerfire.com/blog/new-occupant-load-factors-coming-to-nfpa-101).
    
2.  **Standing Queues**: Kitchen coffee areas ≤5 ft²/person (IBC Table 1004.5) [1] [11](http://www.campusfiresafety.org/Portals/0/Documents/Code%20Corner,%20International%20Code%20Council/3-2015-ICC-Section1004.pdf).
    
3.  **Egress Capacity**: Corridors serving coworking areas must accommodate 0.3 inches per person (CBC 1005.3.1) [14](https://www.dgs.ca.gov/-/media/Divisions/DSA/Publications/bulletins/BU_11-08.pdf).
    

Recommendations
---------------

1.  **Modular Partitions**: Install retractable walls to reconfigure stage overflow for events/coworking.
    
2.  **Sensor-Based Monitoring**: Deploy IoT seat sensors (e.g., FSRTek FA408) in coffee zones to track real-time occupancy [16](https://www.fsrtek.com/applications/library-coffee-shop-restaurant-seat-occupancy-data-acquisition-system).
    
3.  **Hybrid Permitting**: Submit mixed-use floor plans to LADBS with fire-rated separations highlighted.
    

By integrating these strategies, Pollution Studios can safely maximize occupancy across dynamic use cases while maintaining code compliance.

---
**Sources:**
- [(1) PDF BCMC Report on Stages, Platforms, and Sound Stages](https://theatreconsultants.org/downloads/Attac-65.pdf)
- [(2) \+ sqft Green Screen Cyc Studio with Full Lighting Grid & Drive ...](https://www.avvay.com/chicago/space/33422/video-studios/video-studio/1200-sqft-green-screen-cyc-studio-with-full-lighting-grid-drive-in-access)
- [(3) PDF APPENDIX A Assembly Occupancies](https://ocfa.org/Uploads/CommunityRiskReduction/E-01%20Appendix%20A%202023.pdf)
- [(4) PDF Calculating Occupant Loads in Assembly Occupancies](https://sfm.illinois.gov/content/dam/soi/en/web/sfm/sfmdocuments/documents/calculating-occupant-loads-for-assembly-occupancies-march-2022.pdf)
- [(5) When do I need a cyclorama green screen vs just a coved floor ...](https://www.reddit.com/r/vfx/comments/rkegbj/when_do_i_need_a_cyclorama_green_screen_vs_just_a/)
- [(6) Decoded: Calculating the Occupant Load - iDigHardware](https://idighardware.com/2014/07/decoded-calculating-the-occupant-load/)
- [(7) How to use a cyclorama for your production | The Film Hub Inc.](https://thefilmhubinc.com/how-to-use-a-cyclorama-for-your-production/)
- [(8) PDF Chapter 3: Use and Occupancy Classification - ICC Store](https://shop.iccsafe.org/media/wysiwyg/material/3010S151-Sample.pdf)
- [(9) The Ultimate Location Scout Cheat Sheet for Producers and ADs ...](https://www.studiobinder.com/blog/ultimate-location-scouting-checklist-for-producers-and-ads/)
- [(10) Illuminating the Stage: A Guide to Cyclorama Lights](https://ovationlights.com/knowledge-base/a-guide-to-cyclorama-lights/)
- [(11) PDF TELEVISION & FEATURE PRODUCTION SAFETY MANUAL](https://safetyontheset.com/wp-content/uploads/2021/08/Television-and-Feature-Production-Safety-Manual.pdf)
- [(12) T32 Cyc™ | Multispectral LED Multisource LED Linear Static Light](https://www.robe.cz/t32-cyc)
- [(13) cyc lights in a tight space - ControlBooth](https://www.controlbooth.com/threads/cyc-lights-in-a-tight-space.15484/)
- [(14) Theatrical Lighting - Lighting Fixtures - Cyc Lights - GoKnight](https://goknight.com/cyc-lights/)
- [(15) How To Light a Cyc Wall (Cyclorama Stage) - YouTube](https://www.youtube.com/embed/IEE10bXFXoY?autoplay=1&color=white&playsinline=true&enablejsapi=1&origin=https%3A%2F%2Fwww.perplexity.ai&widgetid=11)
- [(16) How to Light a Cyc Wall - YouTube](https://www.youtube.com/embed/IEE10bXFXoY?autoplay=1&color=white&playsinline=true&enablejsapi=1&origin=https%3A%2F%2Fwww.perplexity.ai&widgetid=11)
- [(17) PDF Wireless Occupancy Sensors for Lighting Controls](https://www.energy.gov/femp/articles/wireless-occupancy-sensors-lighting-controls-applications-guide-federal-facility)
- [(18) PDF Classification of Buildings Based on Occupancy](https://law.resource.org/pub/bd/bnbc.2012/gov.bd.bnbc.2012.03.02.pdf)
- [(19) PDF Title 17. Culver City Zoning Code](https://www.culvercity.org/files/content/public/v/9/city-projects/zoning-code/cczcu_final_100924_clean_combined.pdf)
- [(20) .3 Ventilation Requirements - Energy Code Ace](https://energycodeace.com/site/custom/public/reference-ace-2013/Documents/43ventilationrequirements.htm)
- [(21) Green Screen Studio Cyclorama - Uniset](https://unisetcorp.com/home/products-and-services/green-screen-cycloramas/)
- [(22) Certified Studios\* | Los Angeles Fire Department](https://lafd.org/film-unit/certified-studios)
- [(23) PDF CHAPTER 3 USE AND OCCUPANCY CLASSIFICATION SECTION ...](https://highrisefire.com/wp-content/uploads/2014/06/GBC_Occupancy-Group-Descriptions.pdf)
- [(24) PDF FIRE SAFETY REGULATIONS FOR PRODUCTIONS & EVENTS](https://sites.disney.com/app/uploads/sites/53/2020/02/Fire-Safety-Regulations-for-Productions-Events-rev-12.16.pdf)
- [(25) Green Screen Cyclorama - Studio G : How To Use the Space](https://resourceguides.hampshire.edu/c.php?g=835106&p=5966790)
- [(26) PDF Assembly and Theater Safety - Palatine - Harper College](https://www.harpercollege.edu/about/directory/ehs/pdf/Section%2018%20-%20Assembly%20and%20Theater%20Safety.pdf)
- [(27) Occupancy count for a video recording studio](https://www.thebuildingcodeforum.com/forum/threads/occupancy-count-for-a-video-recording-studio.2712/)
- [(28) CHAPTER 3 OCCUPANCY CLASSIFICATION AND USE](https://codes.iccsafe.org/content/IBC2021P1/chapter-3-occupancy-classification-and-use)
- [(29) Lighting a small Green Screen / Cyclorama room for Video](https://creativecow.net/forums/thread/lighting-a-small-green-screen-cyclorama-room-for/)
- [(30) Restaurants, Bars, Bakeries and Occupant Loads - EVstudio](https://evstudio.com/restaurants-bars-bakeries-and-occupant-loads/)
- [(31) PDF Occupancy Classifications | City of Sacramento](https://www.cityofsacramento.gov/content/dam/portal/fire/fire-prevention/prevention-documents/fire-permits/forms/Occupancy-Classifications.pdf)
- [(32) The Role Cyc Walls Play in Post-Production](https://www.procyc.com/the-role-cyc-walls-play-in-post-production)
- [(33) Occupancy Load | The Building Code Forum](https://www.thebuildingcodeforum.com/forum/threads/occupancy-load.35991/)
- [(34) SEC. 57.1004.5.1.2. OCCUPANT LOAD RESPONSIBILITY.](https://codelibrary.amlegal.com/codes/los_angeles/latest/lamc/0-0-0-347820)
- [(35) What's a Cyclorama? How Can Cyc Walls Help My Shot?](https://www.studiobinder.com/blog/cyclorama-wall-definition/)
- [(36) PDF California Fire Code Occupancy Classifications - City of Rocklin](https://www.rocklin.ca.us/sites/main/files/file-attachments/occupancy_type_definitions.pdf?1544046843)
- [(37) CHAPTER 4 SPECIAL DETAILED REQUIREMENTS BASED ON ...](https://codes.iccsafe.org/content/IBC2018/chapter-4-special-detailed-requirements-based-on-occupancy-and-use)
- [(38) Natural Light Studio & Cyclorama Stage, Los Angeles, CA - Peerspace](https://www.peerspace.com/pages/listings/5da76c4cec5d1e000edde7ea)
- [(39) Area Requirements | FilmLA](https://filmla.com/for-filmmakers/requirements/)
- [(40) PDF Film Industry - City of Southfield](https://www.cityofsouthfield.com/sites/default/files/inline-files/filming_fire_safety.pdf)
- [(41) Filming on location - GSA](https://www.gsa.gov/real-estate/historic-preservation/celebrate-american-architecture/filming-on-location)
- [(42) Lighting a white cyc wall well - Cinematography.com](https://cinematography.com/index.php?%2Fforums%2Ftopic%2F49625-lighting-a-white-cyc-wall-well%2F)
- [(43) PDF douglas l. barry fire chief - City of Los Angeles](http://ens.lacity.org/lafd/lafdreportarchv/lafdlafdreport186456996_12022008.pdf)
- [(44) Film Shoot Safety | Film Safety Guidelines - FPW Media](https://fpwmedia.com/shoot-safety/)
- [(45) What is the minimum space required for a small white cyc studio?](https://www.reddit.com/r/Filmmakers/comments/5cqfdj/what_is_the_minimum_space_required_for_a_small/)
- [(46) Occupancy Classifications in Codes - NFPA](https://www.nfpa.org/news-blogs-and-articles/blogs/2021/05/07/occupancy-classifications-and-model-codes)
- [(47) PDF Zoning Use List - Los Angeles City Planning](https://planning.lacity.gov/odocument/647665b9-6246-4eaf-a70c-f06285ff28c4/UseListMemo.pdf)
- [(48) California Code of Regulations, Title 8, Section 3207. Definitions.](https://www.dir.ca.gov/title8/3207.html)
- [(49) CHAPTER 4 SPECIAL DETAILED REQUIREMENTS BASED ON ...](https://codes.iccsafe.org/content/IBC2018P6/chapter-4-special-detailed-requirements-based-on-occupancy-and-use)
- [(50) Group – Internal Gains (People, Lights, Other internal zone equipment)](https://bigladdersoftware.com/epx/docs/8-0/input-output-reference/page-015.html)
- [(51) Safer Movie and TV Film Sets and Locations - Precision Fire Protection](https://pfpinc.com/safer-movie-and-tv-film-sets-and-locations/)
- [(52) How I Prep Camera Gear for a Commercial Film Shoot - YouTube](https://www.youtube.com/embed/IEE10bXFXoY?autoplay=1&color=white&playsinline=true&enablejsapi=1&origin=https%3A%2F%2Fwww.perplexity.ai&widgetid=11)
- [(53) Best Green Screen Studios for Rent in Menifee, CA | Peerspace](https://www.peerspace.com/venues/menifee--ca/green-screen-studio)
- [(54) CALIFORNIA BUILDING CODE, TITLE 24, PART 2 (VOLUMES ...](https://codes.iccsafe.org/content/CABC2022P1/chapter-4-special-detailed-requirements-based-on-occupancy-and-use)
- [(55) CHAPTER 4 SPECIAL DETAILED REQUIREMENTS BASED ON ...](https://codes.iccsafe.org/content/FLBC2023P1/chapter-4-special-detailed-requirements-based-on-occupancy-and-use)
- [(56) Cyclorama Wall | Photographic Studios | Photography Studio Hire ...](https://www.cycloramaprojects.com.au/)
- [(57) PDF SOUND STAGE PRODUCTION REPORT - Los Angeles - FilmLA](https://www.filmla.com/wp-content/uploads/2017/11/sound-stage-study-v3-WEB.pdf)
- [(58) PDF 780 CMR 4.00 - Mass.gov](https://www.mass.gov/doc/7th-edition-780-cmr-massachusetts-building-code-780-cmr-400-special-detailed-requirements-based/download)
- [(59) Cyclorama Walls: What They Are and When to Use Them - Pro Cyc](https://www.procyc.com/cyclorama-walls-what-they-are-and-when-to-use-them)
```
---

## Claude
Analyzed occupancy calculations for Pollution Studios' multifunctional space.

9s

I'll analyze the conversation and the provided images to understand the questions and provide detailed answers about determining occupancy for the Pollution Studios space.

First, let me summarize what's being discussed:

1.  The user initially asked about how to determine occupancy for different types of spaces, specifically mentioning a film production stage and office spaces.
2.  They shared information about Pollution Studios, a facility located in Los Angeles that includes film stages, production offices, creative spaces, and other rooms.
3.  There are two floor plans shown - one with a stage area marked in a blueprint style, and another with a "purple" layout showing what the production company considers rentable studio space.
4.  The user wants to determine occupancy calculations for:
    *   The film stage during active shoots
    *   The entire space when used for coworking
    *   A mixed-use scenario where filming is happening in part of the facility while other areas are used for coworking
5.  The user provided additional information about the specific furniture and seating arrangements in different rooms:
    *   Production offices have a large center table and U-shaped coffee shop-style seating
    *   Kitchen has a 10ft bench table and coffee shop-style wall seating
    *   Creative space has multiple tables (large table for 12-15, L-table for 10), 4 workstations, and 3 couches
    *   Small room off the stage has coffee shop style seating

From the images, I can see:

*   A floor plan with a main stage area (labeled "Stage" in red)
*   Various rooms and spaces surrounding the stage
*   The layout appears to be for a multipurpose facility with production areas, offices, and communal spaces

From the search results in the provided document, I can see detailed information about calculating occupancy loads based on building codes:

*   Different occupancy factors for different types of spaces (assembly, business, etc.)
*   Formulas for calculating maximum occupancy based on square footage and use type
*   Considerations for film production stages, coworking spaces, and mixed-use scenarios

To provide a thorough answer, I'll need to address:

1.  The methodology for calculating occupancy for each scenario
2.  The specific occupancy numbers for the Pollution Studios space
3.  Code considerations and safety requirements
4.  Recommendations for managing the mixed-use concept

I'll use both the information from the conversation and the search results to provide a comprehensive answer.

Occupancy Analysis for Pollution Studios
========================================

Based on the floor plans and information provided, I'll analyze the occupancy calculations for Pollution Studios' space under different scenarios. The facility at 3239 Union Pacific Ave. in Los Angeles appears to be a versatile production facility that you're considering operating in multiple configurations.

Methodology for Calculating Occupancy
-------------------------------------

Occupancy calculations are governed by building codes (primarily IBC/CBC) that assign specific square footage requirements per person based on the use of space:

*   **Film Stages (Assembly A-3)**:
    *   7 ft²/person for concentrated standing
    *   15 ft²/person for less concentrated setups with equipment
*   **Coworking/Office Spaces (Business B)**:
    *   Traditional calculation: 100-150 ft²/person
    *   For collaborative tables/spaces: 15 ft²/person
    *   Seating-specific calculations based on furniture arrangements

Scenario 1: Film Shoot Occupancy
--------------------------------

For the main stage (approximately 65ft × 45ft = 2,925 ft²):

When considering actual film production constraints:

*   Cyclorama usage takes 510 ft² (30ft × 17ft)
*   Equipment/lighting setups reduce usable space by ~400 ft²
*   Usable stage area: ~2,015 ft²

Using the less concentrated assembly factor (15 ft²/person):

*   **Stage occupancy: 134 persons**
*   **Support rooms (kitchen & adjacent rooms): 19 persons**
*   **Total film shoot occupancy: ~153 persons**

This accounts for tables for producers, equipment, green screen/cyclorama setup, and standard film set operational needs.

Scenario 2: Full Coworking Occupancy
------------------------------------

With the detailed furniture information provided:

**Production Offices (800 ft²)**:

*   Large center table: 8-10 persons
*   U-shaped coffee shop seating: 8 persons
*   Total: ~18 persons (rather than the traditional 8 persons at 100 ft²/person)

**Kitchen (200 ft²)**:

*   10ft bench table: 6 persons
*   Coffee shop wall seating: 4 persons
*   Total: ~10 persons

**Creative Space (1,200 ft²)**:

*   Large table: 12-15 persons
*   L-shaped table: 10 persons
*   4 workstations: 4 persons
*   3 couches: 6 persons
*   Total: ~35 persons

**Small Room Adjacent to Stage (150 ft²)**:

*   Coffee shop wall seating: 8-10 persons

**Stage as Overflow (2,925 ft²)**:

*   Repurposed as coworking at 15 ft²/person for collaborative seating: ~195 persons
*   However, likely limited by furniture/setup to ~30-40 persons

**Total Coworking Occupancy: ~80-100 persons** without stage overflow **With Stage Overflow: Up to ~275 persons** (though practically limited by available furniture)

Scenario 3: Mixed-Use Occupancy
-------------------------------

When the stage is being used for filming while other areas serve as coworking:

*   **Stage area (filming)**: 134 persons
*   **Creative Space**: 35 persons
*   **Production Offices**: 18 persons
*   **Kitchen (shared usage at 50%)**: 5 persons

**Total Mixed-Use Occupancy: ~192 persons**

Code Considerations & Recommendations
-------------------------------------

1.  **Egress Requirements**:
    *   Two remote exits required for occupancies >50 persons
    *   Minimum 44-inch-wide exit aisles
    *   Clear 4-ft fire lane around stage perimeter
2.  **Separation Requirements**:
    *   For mixed-use, consider sound isolation between filming and coworking
    *   Possibly need 1-hour fire-rated partition between uses
3.  **Practical Implementation**:
    *   Install modular/flexible partition systems to reconfigure space quickly
    *   Consider deploying occupancy sensors to monitor usage in real-time
    *   Implement booking system to prevent conflicts between filming and coworking
4.  **Permitting Considerations**:
    *   Submit mixed-use floor plans to LADBS for proper certification
    *   Ensure compliance with City of Los Angeles film production requirements
    *   Verify fire safety requirements with LAFD Film Unit

The specific furniture arrangements you've described significantly increase the practical occupancy of spaces compared to standard code calculations, particularly in the production offices and creative spaces. This type of high-density collaborative seating is common in modern coworking environments but may require special attention to egress and ventilation.

Would you like me to elaborate on any specific aspect of these occupancy calculations or provide more detailed recommendations for implementing the mixed-use concept?


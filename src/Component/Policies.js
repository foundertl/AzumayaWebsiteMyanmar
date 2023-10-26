export default function Policies(){
    return(
        <div> 
            <div class="policies__header">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12 offset-4">
                            <div class="policies__title">Hotel Policies</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="re__breadcrumb">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12"></div>
                        <ul class="breadcrumb__list">
                                   <li class = "breadcrumb__item">
                                       <a href="/AzumayaClone/index.html">
                                           <i class="fa-solid fa-house"></i>
                                       </a>
                                   </li>
                                   <li class = "breadcrumb__item">
                                       /
                                   </li>
                                   <li class = "breadcrumb__item">
                                       <a class ="breadcrumb__title" href="/AzumayaClone/html/policies.html">Hotel Policies</a>
                                   </li>
                       </ul>
                    </div>
                </div>
            </div>
        <div class="content__policies">
        <div class="reservation__container">
        <table class="table__policies">
                <tr>
                    <td style={{fontWeight: 600}}>Check-in</td>
                    <td>After 15:00</td>
                </tr>
                <tr>
                    <td style={{fontWeight: 600}}>Check-out</td>
                    <td>Until 12:00</td>
                </tr>
                 <tr>
                    <td style={{fontWeight: 600}}>Early check-in</td>
                    <td>Will be subject to the availability of hotel room status<br />

                        - Check in early until 10:00 : 100% charged of one night room rate <br />
                        
                        - Check in early from 10:00 and before 15:00 : 50% charged of one night room rate</td>
                 </tr>
                 <tr>
                    <td style={{fontWeight: 600}}>Late check-out</td>
                    <td>Will be subject to the availability of hotel room status<br />

                        -   Check out late until 18:00 : 50% charged of the one night<br />
                        
                        -    Check out late from 18:00 : 100% charged of the one night</td>
                 </tr>
                 <tr>
                    <td style={{fontWeight: 600}}>Early check-out</td>
                    <td>- In 48 hours prior to 15:00 of new check out date: 50% charged of one last night<br />

                        - In 24 hours prior to 15:00 of new check out date: 100% charged of one last night</td>
                 </tr>
                 <tr>
                    <td style={{fontWeight: 600}}>Late cancelation</td>
                    <td>In 48 hours prior to 15:00 of check in date : 50% charged of onenight <br />
                        In 24 hours prior to 15:00 of check in date: 100% charged ofone night</td>
                 </tr>
                 <tr>
                    <td style={{fontWeight: 600}}>No show</td>
                    <td>100% charged one night</td>
                 </tr>
                 <tr>
                    <td style={{fontWeight: 600}}>Exchange rate is based on</td>
                    <td>The guest with Corporate Contract: the hotel rate on check in date is applied.<br />
                        The guest without Corporate Contract: the selling rate from Vietcombank at 6pm on check in date is applied</td>
                 </tr>
                 <tr>
                    <td style={{fontWeight: 600}}>Please be noted</td>
                    <td>The Booking Confirmation (we will send you by e-mail) should be showed to Reception upon Check-in<br />
                        The valid Passport ( non Vietnamese ) or ID ( Vietnamese ) is required for guest registration as Vietnamese laws</td>
                 </tr>
            </table>
        </div>
    </div>
</div>
    )
}                   
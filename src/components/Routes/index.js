import { Route, Routes } from "react-router-dom";
import CreateHost from "../../modules/CreateHost";
import ViewHost from "../../modules/Host";
import CreateMeeting from "../../modules/CreateMeeting";
import ViewMeeting from "../../modules/Meeting";
import ViewParticipant from "../../modules/Participant";
import CreateParticipant from "../../modules/CreateParticipant";
import HostDetails from "../../modules/HostDetails";
import MeetingDetails from "../../modules/MeetingDetails";
import ParticipantDetails from "../../modules/ParticipantDetails";
import AssignHost from "../../modules/AssignHost";
import AssignParticipant from "../../modules/AssignParticipant";

const AppRoutes =() => {
    return(
        <Routes>
            <Route path="/" element={<ViewHost/>}/>
            <Route path="host" element={<CreateHost/>}/>
            <Route path="meeting" element={<ViewMeeting/>}/>
            <Route path="meeting/create" element={<CreateMeeting/>}/>
            <Route path="participant" element={<ViewParticipant/>}/>
            <Route path="participant/create" element={<CreateParticipant/>}/>
            <Route path="host/:id" element={<HostDetails/>}/>
            <Route path="meeting/:id" element={<MeetingDetails/>}/>
            <Route path="participant/:id" element={<ParticipantDetails/>}/>
            <Route path="meeting/assign/:id" element={<AssignHost/>}/>
            <Route path="/assign/:id" element={<AssignParticipant/>}/>



        </Routes>


    );
};

export default AppRoutes;
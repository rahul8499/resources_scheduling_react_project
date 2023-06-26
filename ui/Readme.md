Sr. No.	Business Rules

1	There are multiple locations of Allen institute in one city 
2	At the moment we are developing this scheduling application for Pune City
3	At the moment there are 2 slots per location mostly - Morning Slot and Evening Slot
4	Each slot may have 2 or 3 or 4 sessions per class
5	Each session has a start time and end time. For example 8am to 940am is one session of morning slot
6	His session has a CODE for example - MJAR  = M (Maths), J(JEE), AR (Atul Ramuka - Professor's initials)
7	There are 2 TYPES of batches in JEE - Nurture (11th Std), Enthuse  (12th Std) 
8	Each batch may have multiple divisions for example - BJNMR  = B (Baner , location), J(JEE), N(Nurture), M(Morning), R (?) - need to ask the client. 
9	Create a Batch master
10	Batch should also define on which days of the week this batch is conducted. For example - TTF - Tuesday, Thursday, Friday
11	generally while creating a time table of the batch the defination of TTF will be mostly followed but if for some reason Admin wants to change it and add another day to that batch in only a certain week then it should be allowed. 
12	Create a Faculty Master
13	While creating Factulty in faculty master - the faculty should be associated to one or more batches
14	Faculty's available dates or leaves should also be captured in the system which can help in planning their availability. 
15	It is expected that total number of hours faculty is expected to remain at the institute should not exceed 10 hours per day. Thus the sessions of the topic should be planned accordingly. 
16	It is assumed that each faculty teaches only one subject
17	If there are 3 sessions in a slot then 1 session should be given to each subject - For example, one session for Physics, One for Chemistry and one for Maths to ensure even distribution
18	Allen institue functions from Monday to Saturday. Most of the Sunday's are off but on certain Sunday's there will be examinations
19	The days of the week where the batch is not conducting any sessions due to any reasons - like the batch schedule or holidays, faculty's unavailablity etc, that session is considered as "Study Leave". Also the system should capture the summber break or diwali break or some kind of holiday list for the batch. 
20	If there are more than 1 Study Leave in a batch on a day then its better to give that batch a HOLIDAY for that day by considering it as a STUDY Leave) 
21	Allen will give us the number of sessions each subject should get in a calendar year. For example there should be minum 100 sessions of Physics for a batch in a year and so for each subject. This is required to ensure that those many number of sessions are given to that subject by evenly distributing the sessions across the year while scheduling
22	Allen will also give us Per Batch, Per Faculty/Subject, Per Week - number of lectures to ensure evenly distrubuted over a week. For instance evening batches have only 2 sessions per day but they come for 5 days a week, which means total 10 lectures in a week and those are distributed 3 maths, 3 physics and 4 chemistry per week. this definiation should be captured somewhere. 
23	Generally the Timetable / schedule is prepared for every week of the month
24	Every faculty should not have more than 3 lectures in a day - however this should only be a NOTIFICATION or ALERT in case admin wants to allocate more than 3 lectures for a Faculty in a day then it should allow and not restrict. 
25	The lectures for a faculty should be evenly distributed which means if a faculty is allocated to 4 batches and each batch should get minimum 3 lectrues in a week then that means the faculty is expected to deliver 4 X 3 = 12 lectures in a week of 6 days. Now, these 12 lectures should be evenly distributed and not crowded in just 2 or 3 days of the week. 
26	The imagination is - there should be a "Create Time-table" or "Create A Schedule" button - on click of which the system should ask which batch, which slot, which week of the month for which you want to create the schedule and once selected the system should create a schedule for that week by considering all these business rules. This is expected that the time-table thus created should be 90% correct and should allow the user to edit it as per their requirements. 
27	It is expected that when we select one faculty it should show that faculty's monthly calendar and show the lectures on the calendar which will help the admin to see if the lectures are evenly distributed
28	In a given time - one faculty cannot or should not take all sessions of a day for a batch. For exampl, on a Monday a batch has 3 morning sessions and since there are other 2 faculties not available then same faculty takes consecutively all 3 sessions - this is not accepted and should be alerted. 
29	While creating a time table of the week, there is no particular sequence of the subject or faculty. So if there are 3 sessions or lectures in a day for a batch , then any subject of physics, chemistry or maths can come in any sequence. The only requirement is if Physic's faculty lecture is first in the morning AND if the same faculty should also take a lecture in the evening slot then the time duration between the start time of the first lecture and end time of the last lecture should NOT exceed 10 hours. In this case the system should only ALERT but still not prevent the user from manually scheduling lectures for particular faculty. 
30	While scheduling it should be ensured that the same faculty lectures are not clashing across locations. One faculty may give lectures at multiple locations in the city so the lectures should not clash. 
31	The system should be able to explore weekly schedule in the given spreadsheet format for other systems to take it as an input

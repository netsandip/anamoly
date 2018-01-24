angular.module('BlurAdmin.pages')
    .service('dataService', ['$http', function ($http) {

        //var urlBase = '/api/apiName';

        this.getUseCaseOneData = function () {
            //return $http.get(urlBase);
            var data = [
                {
                    _id: "5a6591f5a46a3836f40013cc",
                    NA_: "1",
                    Seq_No: 9.0,
                    Event_Date: "2017-10-09",
                    Event_Time: "10:05:32",
                    Card_No: 120.0,
                    Acess_Zone: "Door 1",
                    Access_Type: "Authorised",
                    Number_Hours: 7.840555556,
                    Temporal_Pattern: "Not Applicable",
                    Date_Time: "2017-10-09T02:05:31.999Z",
                    Exceeds_9PM: "No",
                    Displacement_Pattern: "No",
                    Diff_AUN_RES: "No",
                    Long_Time_No_exit: "Not Applicable",
                    Out_Pattern: "No"
                },
                {
                    _id: "5a6591f5a46a3836f40013cd",
                    NA_: "2",
                    Seq_No: 111.0,
                    Event_Date: "2017-10-09",
                    Event_Time: "10:09:32",
                    Card_No: 120.0,
                    Acess_Zone: "Door 3",
                    Access_Type: "s",
                    Number_Hours: 7.840555556,
                    Temporal_Pattern: "Not Applicable",
                    Date_Time: "2017-10-09T02:09:32.000Z",
                    Exceeds_9PM: "No",
                    Diff_EventTime: 240.0,
                    Door_Zone: "Door 1 Door 3",
                    Displacement_Pattern: "No",
                    DiffUnAuth: "Authorised s",
                    Diff_AUN_RES: "No",
                    Long_Time_No_exit: "Not Applicable",
                    Out_Pattern: "No",
                    NoExit_Hours: 0.066666667
                },
                {
                    _id: "5a6591f5a46a3836f40013ce",
                    NA_: "3",
                    Seq_No: 112.0,
                    Event_Date: "2017-10-09",
                    Event_Time: "11:09:32",
                    Card_No: 120.0,
                    Acess_Zone: "Door 3",
                    Access_Type: "Authorised",
                    Number_Hours: 7.840555556,
                    Temporal_Pattern: "Not Applicable",
                    Date_Time: "2017-10-09T03:09:32.000Z",
                    Exceeds_9PM: "No",
                    Diff_EventTime: 3600.0,
                    Door_Zone: "Door 3 Door 3",
                    Displacement_Pattern: "No",
                    DiffUnAuth: "s Authorised",
                    Diff_AUN_RES: "No",
                    Long_Time_No_exit: "Not Applicable",
                    Out_Pattern: "No",
                    NoExit_Hours: 1.0
                },
                {
                    _id: "5a6591f5a46a3836f40013cf",
                    NA_: "4",
                    Seq_No: 113.0,
                    Event_Date: "2017-10-09",
                    Event_Time: "11:09:59",
                    Card_No: 120.0,
                    Acess_Zone: "Door 10",
                    Access_Type: "Authorised",
                    Number_Hours: 7.840555556,
                    Temporal_Pattern: "Not Applicable",
                    Date_Time: "2017-10-09T03:09:58.999Z",
                    Exceeds_9PM: "No",
                    Diff_EventTime: 27.0,
                    Door_Zone: "Door 3 Door 10",
                    Displacement_Pattern: "No",
                    DiffUnAuth: "Authorised Authorised",
                    Diff_AUN_RES: "No",
                    Long_Time_No_exit: "Not Applicable",
                    Out_Pattern: "Out of Sequence",
                    NoExit_Hours: 0.0075
                }
            ]
            return data;
        }

        this.getUseCaseFourData = function () {
            var data = [
                { "name": "880", "value": 4 },
                { "name": "333", "value": 8 },
                { "name": "451", "value": 2 },
                { "name": "555", "value": 10 },
                { "name": "222", "value": 4 },
                { "name": "200", "value": 6 },
                { "name": "451", "value": 2 },
                { "name": "555", "value": 5 },
                { "name": "111", "value": 4 },
                { "name": "451", "value": 2 },
                { "name": "321", "value": 5 },
                { "name": "222", "value": 4 },
            ]
            return data;
        }
    }]);

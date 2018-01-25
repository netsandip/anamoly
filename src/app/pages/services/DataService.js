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

        this.getUseCaseFiveData = function () {
            var data = [
                ['Card number', 'Parent', 'Number of unauthorized accesses'],
                ['Unauthorized', null, 0],
                ['880', 'Unauthorized', 0],
                ['333', 'Unauthorized', 0],
                ['450', 'Unauthorized', 0],
                ['820', 'Unauthorized', 0],
                ['720', 'Unauthorized', 0],
                ['721', 'Unauthorized', 0],

                ['880 - Door 1', '880', 1],
                ['880 - Door 2', '880', 22],
                ['880 - Door 3', '880', 23],
                ['880 - Door 4', '880', 4],
                ['333 - Door 5', '333', 25],
                ['333 - Door 6', '333', 6],
                ['333 - Door 7', '333', 27],
                ['333 - Door 8', '333', 18],
                ['333 - Door 9', '333', 94],
                ['333 - Door 10', '333', 10],
                ['450 - Door 5', '450', 5],
                ['450 - Door 6', '450', 6],
                ['450 - Door 7', '450', 7],
                ['450 - Door 8', '450', 8],
                ['450 - Door 9', '450', 9],
                ['450 - Door 10', '450', 40],
                ['720 - Door 1', '720', 12],
                ['720 - Door 2', '720', 12],
                ['720 - Door 3', '720', 29],
                ['720 - Door 4', '720', 40],
                ['820 - Door 4', '820', 20],
                ['721 - Door 1', '721', 12],
                ['721 - Door 2', '721', 12],
                ['721 - Door 3', '721', 9],
                ['721 - Door 4', '721', 40],
            ]
            return data;
        }
    }]);

<?php

namespace App\Http\Controllers;
use App\Models\Faculty;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\ValidationException;


class FacultyController extends Controller
{

    protected $searchFacultiesArray = ['faculties.first_name','faculties.last_name','faculties.mail','faculties.phone','faculties.gender','faculties.subject','faculties.experience'];

  public function createfaculty(Request $request)
    {
         try {
        // Validate the request data
        $validator = Validator::make($request->all(), [
            
            'first_name' => 'required|string|max:255|',
            'last_name' => 'required|string|max:255|',
            'mail' => 'required|email|',
            'phone' => 'required|numeric|min:10',
            'age' => 'required|numeric|min:2',
            'address' => 'required|string|max:255|',
            'subject' => 'required',  
            // 'batch_code' => 'required|array',
            // 'batch_type_id' => 'required|array',
            'batch_slot_id' => 'required',
            'location_id' => 'required'
        
        ]);

        if ($validator->fails()) {
            // echo"comes";exit;
            // Return a validation error response
            return response()->json([
                'message' => 'Validation error',
                'errors' => $validator->errors(),
            ], 422);
        }

        // Create a new resource
        $faculty=new Faculty();
       
        $faculty->first_name=$request->first_name;
        $faculty->last_name=$request->last_name; 
        $faculty->mail=$request->mail;
        $faculty->phone=$request->phone;
        $faculty->gender=$request->gender;
        $faculty->address=$request->address;
        $faculty->subject = $request->subject;
        $faculty->age=$request->age;
        $faculty->experience=$request->experience;
        // $faculty->batch_code= json_encode($request->batch_code_id); 
        // $faculty->batch_type_id = json_encode($request->batch_type_id);     
        $faculty->batch_slot_id = $request->batch_slot_id;
        $faculty->location_id=$request->location_id; 
        $result=$faculty->save();
        return $result;
        // save faculty_type
       

        } catch (\Exception $e) {
        // Log the exception
        \Log::error('Error creating resource: ' . $e->getMessage());

        // Return an error response
        return $e->getMessage();
    }   
    }
     public function getfacultydata(Request $request)
    {
        $requestParam= $request->all();
        $query= DB::table('faculties');
        $query=Faculty::select('faculties.*','locations.name as locationName','batch_slots.name as batchSlots')
        ->join('locations', 'locations.id', '=', 'faculties.location_id')
        ->join('batch_slots', 'batch_slots.id', '=', 'faculties.batch_slot_id');
        // ->select(array('faculties.*','locations.name as locationName','batch_slots.name as batchSlots'));
        
        // ->join('batch_types', 'batch_types.id', '=', 'faculties.batch_type_id')
        


        if (!empty($requestParam['q']))
        {
            foreach ($this->searchFacultiesArray as $data) {
                $query->orWhere($data, 'like',"%". $requestParam['q']."%");
            }
        }
        // $query->filter($request);
        $query->orderBy("{$requestParam['sortBy']}","{$requestParam['sortOrder']}");
        $result= $query->paginate($requestParam['limit']);
        return $result;   
    }

     public function showfacultyById($id)
    {
        $faculty = Faculty::find($id);
        return $faculty;;
    } 

      public function updatefaculty(Request $request,$id)
{
    try {
        // Validate the request data
        $validatedData = $request->validate([
           'first_name' => 'required|string|max:255|',
            'last_name' => 'required|string|max:255|',
            'mail' => 'required|email|',
            'phone' => 'required|numeric|min:10',
            'age' => 'required|numeric|min:2',
            'address' => 'required|string|max:255|',
            'subject' => 'required', 
        //     // 'batch_code' => 'required|array',
        //     // 'batch_type_id' => 'required|array',
            'batch_slot_id' => 'required',
            'location_id' =>'required'
            
        ]);
        
        // Update the resource
        $resource = Faculty::findOrFail($id);
        $resource->update($validatedData);

        // Return a success response
        return response()->json([
            'message' => 'Resource updated successfully',
            'data' => $resource,
        ]);
    }
    catch (ValidationException $e) {
        // Return a validation error response
        return response()->json([
            'message' => 'Validation error',
            'errors' => $e->errors(),
        ], 422);
    }
    catch (\Exception $e) {
        
        // Log the exception
        \Log::error('Error creating resource: ' . $e->getMessage());
        //Return an error response
        return $e->getMessage();
    }
       
        $faculty=Faculty::find($request->id);
        $faculty->first_name=$request->first_name;
        $faculty->last_name=$request->last_name; 
        $faculty->mail=$request->mail;
        $faculty->phone=$request->phone;
        $faculty->gender=$request->gender;
        $faculty->address=$request->address;
        $faculty->subject=$request->subject;
        $faculty->age=$request->age;
        $faculty->experience=$request->experience;
        // $faculty->subject = implode(', ', $request->subject);
        // $faculty->batch_code= json_encode($request->batch_code_id); 
        // $faculty->batch_type_id = json_encode($request->batch_type_id);     
        // $faculty->batch_slot_id = json_encode($request->batch_slot_id);
        $faculty->batch_slot_id = $request->batch_slot_id;
        $faculty->location_id=$request->location_id; 
       $result=$faculty->update();
       if($result)
       {
        return["result"=>"data has been updated"];
       }
       else{
        return["result"=>"data not updated"];
       }
}
      public function deletefaculty($id)
    {
          try {
        // Find the resource by ID
        $resource = Faculty::findOrFail($id);

        // Delete the resource
        $resource->delete();

        // Return a success response
        return response()->json([
            'message' => 'Resource deleted successfully',
        ]);
    } catch (\Exception $e) {
        // Log the exception
        \Log::error('Error deleting resource: ' . $e->getMessage());
        // Return an error response
        return response()->json([
            'message' => 'Error deleting resource',
            'error' => 'An unexpected error occurred',
        ], 500);
    }
        $faculty=Faculty::find($id);
       $result=$faculty->delete();
       return["result"=>"data has been daleted"];
    }  
    
   
}
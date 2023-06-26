<?php

namespace App\Http\Controllers;
use App\Models\Batch;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class BatchController extends Controller
{ 
    public function createbatch(Request $request)
    {   
        try {
       
        $validator = Validator::make($request->all(), [
            'batch_code' => 'required|string|max:255|',    
        ]);

        if ($validator->fails()) {
            // Log::debug('in if.');
            // Return a validation error response
            // return response()->json([
            //     'message' => 'Validation error',
            //     'errors' => $validator->errors(),
            // ], 422);
        }

       
      $batch=new Batch();
        $batch->batch_code=$request->batch_code;
        $batch->duration=$request->duration; 
        $batch->date=$request->date;
        // $batch->batch_type_id=$request->batch_type_id; 
        $batch->batch_slot_id=$request->batch_slot_id; 
        // $batch->location_id=$request->location_id; 
        $result=$batch->save();
        return $result;
        
    } catch (\Exception $e) {
      
        Log::error('Error creating resource: ' . $e->getMessage());

      
        return $e->getMessage();
    }   
 }


     public function getdata(Request $request)
    {
        $requestParam= $request->all();
        $query=Batch::select('batches.*','batch_slots.*','batch_types.*','locations.*')
        ->join('batch_slots', 'batch_slots.id', '=', 'batches.batch_slot_id')
        ->join('batch_types', 'batch_types.id', '=', 'batches.batch_type_id')
         ->join('locations', 'locations.id', '=', 'batches.location_id');


        if (!empty($requestParam['q']))
        {
            foreach ($this->SearchBatchesArray as $data) {
                $query->orWhere($data, 'like',"%". $requestParam['q']."%");
            }
        }
        
        $query->orderBy("{$requestParam['sortBy']}","{$requestParam['sortOrder']}");
        $result= $query->paginate($requestParam['limit']);
        return $result;  
    }

     public function showBatchById($id)
    {
        $tm = Batch::join('batch_slots', 'batch_slots.id', '=', 'batches.batch_slot_id')
          ->join('batch_types', 'batch_types.id', '=', 'batches.batch_type_id')
           ->join('locations', 'locations.id', '=', 'batches.location_id')
            ->where('batches.id', '=', $id);

        return $tm->get();
    } 
    
     public function update(Request $request ,$id)
    {
         try {
      
        $validatedData = $request->validate([
           'batch_code' => 'required|string|max:255|',
            
        ]);

        
        $resource = Batch::findOrFail($id);
        $resource->update($validatedData);

        return response()->json([
            'message' => 'Resource updated successfully',
            'data' => $resource,
        ]);
    } catch (ValidationException $e) {
       
        return response()->json([
            'message' => 'Validation error',
            'errors' => $e->errors(),
        ], 422);
    }  catch (\Exception $e) {
       
        \Log::error('Error creating resource: ' . $e->getMessage());

        
        return $e->getMessage();
    }
        $batch=Batch::find($request->id);
        $batch->batch_code=$request->batch_code;
        $batch->duration=$request->duration; 
        $batch->date=$request->date;
        $batch->batch_type_id=$request->batch_type_id; 
        $batch->batch_slot_id=$request->batch_slot_id; 
        $batch->location_id=$request->location_id; 
       $result=$batch->update();
       if($result)
       {
        return["result"=>"data has been updated"];
       }
       else{
        return["result"=>"data not updated"];
       }
    }



    public function delete($id)
    {
         try {
      
        $resource = Batch::findOrFail($id);

      
        $resource->delete();

       
        return response()->json([
            'message' => 'Resource deleted successfully',
        ]);
    } catch (\Exception $e) {
      
        \Log::error('Error deleting resource: ' . $e->getMessage());

       
        return response()->json([
            'message' => 'Error deleting resource',
            'error' => 'An unexpected error occurred',
        ], 500);
    }
        $batch=Batch::find($id);
       $result=$batch->delete();
       return["result"=>"data has been daleted"];
    }  
    
   
    public function batchesList()
    {
        return Batch::select('batches.id', 'batches.batch_code')
                ->orderBy('batch_code', 'asc')
                ->get();
    }
}   
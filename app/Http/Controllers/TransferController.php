<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Transfer;
use App\Models\Wallet;

class TransferController extends Controller
{
    public function store(Request $request) {
        $wallet = Wallet::find($request->wallet_id);
        $wallet->money = $wallet->money + $request->mount;
        $wallet->update();

        $transfer = new Transfer();
        $transfer->description = $request->description;
        $transfer->mount = $request->mount;
        $transfer->wallet_id = $request->wallet_id;
        $transfer->save();

        return response()->json($transfer, 201);
    }
}

import { FastifyRequest, FastifyReply} from 'fastify'
import crypto from 'crypto'
import {pool}
import {redis}

interface Tenant {
    id: string;
    name: string;
    api_key_hash: string;
    rate_limit_rpm: number;
}

function hashApiKey(key: string){
    return crypto.createHash('sha256').update(key).digest('hex');
}


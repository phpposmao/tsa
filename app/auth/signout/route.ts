// @ts-nocheck
import scraper from '@/utils/scraper/scraper.utils';
import { type NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest, res: NextResponse) {
    try {
        const { pesquisa } = req.body;
        const empresas = await scraper(pesquisa);
        const empresasNew = [];

        for (let i = 0; i < empresas.length; i++) {
            empresasNew.push({
                "googleId" : empresas[i].placeId,
                "nome" : empresas[i].storeName,
                "endereco": empresas[i].address,
                "categoria": empresas[i].category,
                "telefone": empresas[i].phone,
                "googleUrl": empresas[i].googleUrl,
                "website": empresas[i].bizWebsite,
                "ratingText": empresas[i].ratingText,
                "estrelas": empresas[i].stars,
                "comentarios": empresas[i].numberOfReviews
            })
        }

        res.json(empresas);
    } catch (err) {
        console.error(`Erro ao criar empresas no banco de dados`, err.message);
    }
}